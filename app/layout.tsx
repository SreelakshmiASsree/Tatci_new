import type { Metadata } from "next";
import { Playfair_Display, Black_Ops_One } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const blackOpsOne = Black_Ops_One({
  variable: "--font-blackops",
  subsets: ["latin"],
  weight: "400", // Black Ops One only has one weight
});

export const metadata: Metadata = {
  title: "Tatci| Elevate Your Digital Future",
  description: "Premium digital agency, coworking space & academy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${blackOpsOne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
