import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { icons } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InovaSys",
  description:
    "Especialistas em automação, IA, cloud e desenvolvimento web. Ajudamos pequenas e médias empresas a crescer através da tecnologia.",
  keywords:
    "Consultoria TI, automação empresarial, inteligência artificial, cloud computing, desenvolvimento web, pequenas empresas",
  authors: [{ name: "Guilherme Assis" }],
  openGraph: {
    title: "InovaSys Consultoria | Transformação Digital para PMEs",
    description:
      "Especialistas em automação, IA, cloud e desenvolvimento web para pequenas e médias empresas.",
    url: "https://InovaSysConsultoria.com.br",
    siteName: "InovaSys",
    locale: "pt_BR",
    type: "website",
    icons: { icon: "/favicon.ico" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
