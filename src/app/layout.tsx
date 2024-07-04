import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./reset.css";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prueba técnica",
  description:
    "Crear una página web de un perfil de usuario que incluya información básica, una lista de intereses y una sección de contacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
