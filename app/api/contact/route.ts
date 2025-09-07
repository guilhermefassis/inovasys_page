import { NextRequest, NextResponse } from "next/server";

async function sendToHubSpot(contactData: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message?: string;
}) {
  const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!HUBSPOT_ACCESS_TOKEN) {
    console.warn(
      "HUBSPOT_ACCESS_TOKEN não configurado - dados não serão enviados para o HubSpot"
    );
    return null;
  }

  try {
    const response = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: {
            email: contactData.email,
            firstname: contactData.name.split(" ")[0],
            lastname: contactData.name.split(" ").slice(1).join(" ") || "",
            company: contactData.company || "",
            phone: contactData.phone || "",
            hs_lead_status: "NEW",
            lifecyclestage: "lead",
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Erro ao enviar para HubSpot:", response.status, errorData);
      return null;
    }

    const hubspotContact = await response.json();
    console.log("Contato criado no HubSpot:", hubspotContact.id);
    return hubspotContact;
  } catch (error) {
    console.error("Erro na integração com HubSpot:", error);
    return null;
  }
}

async function createHubSpotDeal(
  contactId: string,
  service: string,
  message?: string
) {
  const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!HUBSPOT_ACCESS_TOKEN || !contactId) {
    return null;
  }

  try {
    const response = await fetch(
      "https://api.hubapi.com/crm/v3/objects/deals",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: {
            dealname: `Solicitação de ${service}`,
            dealstage: "appointmentscheduled",
            pipeline: "default",
            amount: "0",
            closedate: new Date(
              Date.now() + 30 * 24 * 60 * 60 * 1000
            ).toISOString(),
            hubspot_owner_id: "",
          },
          associations: [
            {
              to: {
                id: contactId,
              },
              types: [
                {
                  associationCategory: "HUBSPOT_DEFINED",
                  associationTypeId: 3,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error(
        "Erro ao criar deal no HubSpot:",
        response.status,
        errorData
      );
      return null;
    }

    const hubspotDeal = await response.json();
    console.log("Deal criado no HubSpot:", hubspotDeal.id);
    return hubspotDeal;
  } catch (error) {
    console.error("Erro ao criar deal no HubSpot:", error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, phone, service, message } = body;

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Nome, email e serviço são obrigatórios" },
        { status: 400 }
      );
    }

    const contactId = `TF-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim(),
      phone: phone?.trim(),
      service: service.trim(),
      message: message?.trim(),
    };

    console.log("Nova solicitação de contato:", {
      id: contactId,
      ...contactData,
      timestamp: new Date().toISOString(),
    });

    const hubspotContact = await sendToHubSpot(contactData);

    let hubspotDeal = null;
    if (hubspotContact?.id) {
      hubspotDeal = await createHubSpotDeal(
        hubspotContact.id,
        service,
        message
      );
    }

    const response = {
      success: true,
      message: "Solicitação enviada com sucesso!",
      contactId: contactId,
      hubspot: {
        contact: hubspotContact
          ? { id: hubspotContact.id, created: true }
          : { created: false },
        deal: hubspotDeal
          ? { id: hubspotDeal.id, created: true }
          : { created: false },
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Erro ao processar formulário de contato:", error);

    return NextResponse.json(
      {
        error: "Erro interno do servidor. Tente novamente em alguns minutos.",
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "API de contato da InovaSys Consultoria está funcionando!",
    timestamp: new Date().toISOString(),
    hubspot: {
      configured: !!process.env.HUBSPOT_ACCESS_TOKEN,
    },
  });
}
