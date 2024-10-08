// styles
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

// metadata
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blogify",
  description: "Blog Page",
};

// components
import { Navbar, Footer } from "@/components";
import { Providers } from "./components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
