import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Nome, email e serviço são obrigatórios" },
        { status: 400 }
      );
    }

    // Log the contact request (in production, this would save to database)
    const contactId = `TF-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    console.log("Nova solicitação de contato:", {
      id: contactId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || "Não informado",
      phone: phone?.trim() || "Não informado",
      service: service.trim(),
      message: message?.trim() || "Nenhuma mensagem adicional",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Solicitação enviada com sucesso!",
      contactId: contactId,
    });
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
  });
}
