import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import JsonLd from "./components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abhaykushwaha.dev'),
  title: {
    default: "Abhay Kushwaha | AI & Full-Stack Developer",
    template: "%s | Abhay Kushwaha"
  },
  description: "Portfolio of Abhay Kushwaha, specializing in AI, Full-Stack Development, and GovTech solutions. Building the future with modern web technologies.",
  keywords: ["Abhay Kushwaha", "Full Stack Developer", "AI Engineer", "Next.js", "React", "Portfolio", "Web Developer", "India", "Kanpur"],
  authors: [{ name: "Abhay Kushwaha", url: "https://abhaykushwaha.dev" }],
  creator: "Abhay Kushwaha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhaykushwaha.dev",
    title: "Abhay Kushwaha | AI & Full-Stack Developer",
    description: "Building the future with AI and Modern Web Tech. Explore my projects, experience, and publications.",
    siteName: "Abhay Kushwaha Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Ensure you have this image in public folder
        width: 1200,
        height: 630,
        alt: "Abhay Kushwaha Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Kushwaha | AI & Full-Stack Developer",
    description: "Full Stack Developer & AI Engineer. Check out my work!",
    images: ["/og-image.jpg"],
    creator: "@abhaykushwaha", // specific twitter handle if applicable
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden`}
      >
        <CustomCursor />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
