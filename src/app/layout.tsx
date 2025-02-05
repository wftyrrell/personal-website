import type { Metadata } from "next";
import "./globals.css";

// import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "William Tyrrell", // Default title
  description: "Default description for my website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="" />
      </head>
      <body className="flex flex-col">
        {/* <div className="pb-24"> 
          <NavBar />
        </div> */}
        <main className="pb-4 px-4"> 
          {children}
        </main>
        <div className="pt-4">
          <Footer />
        </div>
      </body>
    </html>
  );
}