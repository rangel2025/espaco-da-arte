import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Espaço da Arte | Ateliê de Pintura e Arte Terapia em Americana/SP",
  description:
    "Há mais de 25 anos, o Espaço da Arte oferece aulas de pintura, mosaico, mandalas, arte terapia e muito mais em Americana/SP. Venha criar e se transformar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
