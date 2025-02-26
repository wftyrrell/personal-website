import type { Metadata } from "next";
import "./globals.css";

import Footer from "../components/footer";
import Header from "../components/header";

export const metadata: Metadata = {
  title: "William Tyrrell", // Default title
  description: "Portfolio website of William Tyrrell.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Correct Favicon Path */}
        <link rel="icon" href="/headshot.jpg" type="image/jpeg" />
      </head>
      {/* ✅ Full Page Flexbox Layout to Stick Footer to Bottom */}
      <body className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex-1 pb-4 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
