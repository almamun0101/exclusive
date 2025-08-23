// This file is often generated with some default styling (e.g., globals.css)
// and font optimization using next/font.

import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Topbar from "@/component/Topbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product Overview",
  description: "Exclusive product details and purchase options",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* You can add shared UI components here, like a header or navbar */}
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
