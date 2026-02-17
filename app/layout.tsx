import type { Metadata } from "next";
import { Host_Grotesk, Nunito } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spryone-green.vercel.app/"),
  title: {
    default: "SpryOne | 35+ Years of Mastery & Modern Creativity",
    template: "%s | SpryOne",
  },
  description: "The architects behind culture-shifting campaigns. With 400+ brands transformed and a 100% retention rate, SpryOne blends 35 years of mastery with digital innovation.",
  keywords: ["Creative Agency", "Digital Transformation", "Brand Strategy", "Campaign ROI", "SpryOne"],
  authors: [{ name: "SpryOne Team" }],
  openGraph: {
    title: "SpryOne | Culture-Shifting Campaigns & Digital Experiences",
    description: "35+ years of mastery. 400+ brands transformed. Discover the visionaries and builders behind the magic.",
    url: "https://spryone-green.vercel.app/",
    siteName: "SpryOne",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SpryOne - Mastery Meets Creativity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpryOne | Architects of Culture",
    description: "Redefining what agencies deliver through strategy, creativity, and 600% average ROI.",
    images: ["/og-image.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hostGrotesk.variable} ${nunito.variable} antialiased min-h-screen flex flex-col mx-auto px-layout-x py-layout-y`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
