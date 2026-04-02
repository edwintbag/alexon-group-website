import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CartDrawer from "../components/CartDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alexon Group Ltd | Building the Future of Infrastructure",
  description:
    "Alexon Group — Kenya's trusted partner for growth and sustainability. Agribusiness, Construction Materials, Real Estate, and Logistics across East Africa.",
  keywords:
    "construction Kenya, building materials Kenya, real estate Siaya, agribusiness Kenya, logistics East Africa",
  openGraph: {
    title: "Alexon Group Ltd",
    description: "Your trusted partner for growth and sustainability",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <body>
        <CartProvider>
          <Navbar />
          <main style={{ minHeight: "100vh" }}>{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
