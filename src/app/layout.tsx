import type { Metadata } from "next";
import {Poppins } from  "next/font/google";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_NAME } from "@/lib/constants";
import "./globals.css";


// Download Poppins at build time and self-host it
const poppins = Poppins ({
subsets: ["latin"], 
weight: ["300", "400", "500", "600", "700"],
variable: "--font-poppins", 
});

// SEO tagsgenerates <title> and <meta name="description">
export const metadata: Metadata = {
 title:{
    default: `${SITE_NAME} - An online store`,  // used on pages without their own title
    template: `%s | ${SITE_NAME} `,           // child pages: "Cart | XAR"
 },
 description: "Shop quality products at the best prices.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={poppins.variable}
    >
      <body className="min-h-full flex flex-col font-sans " suppressHydrationWarning >



          {/* Navbar reads the URL (usePathname), so it's wrapped in Suspense;
            fallback = empty bar of the same height so no layout jump */}

          <Suspense fallback={<div className="h-16 border-b border-gray-200" />} > 
            <Navbar/>
          </Suspense>

          {/* flex-1 , main grows to fill space, pushing Footer down */}
          
          <main className="flex-1" >{children}</main>

          <Footer/>

      </body>
    </html>
  );
}
