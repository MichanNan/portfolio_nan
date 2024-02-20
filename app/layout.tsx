import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Background from "@/components/Background";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Nan",
  description: "Nan's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Container>
          <Background>
            <Header /> {children}
          </Background>
        </Container>
      </body>
    </html>
  );
}
