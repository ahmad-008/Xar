"use client";

import Link from "next/link";   //used for navigating without loading the whole page
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Heart, Menu, ShoppingCart, User, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";



// State and the active-link helper
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    // Current URL path, e.g. "/" or "/products"
    const pathname = usePathname();

    //returns the classes for a nav link; 
    //orange if it's the current page, dark otherwose
    const linkClass = (href: string) =>
        `text-sm font-medium transition-colors hover:text-accent 
    ${pathname === href ? "text-accent" : "text-brand"}`;

    return (
        //stick bar top-0 
        //z-50 bar stays above all page content

        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur" >
            <Container className="flex h-16 items-center justify-between" >
                {/* ---------- Logo ---------- */}
                <Link href="/" className="text-xl font-bold tracking-tight">
                    {SITE_NAME}
                </Link>

                {/* ---------- Desktop links ---------- */}
        {/* hidden on mobile shown as a row from md (768px) up */}
                <nav className="hidden items-center gap-8 md:flex" >
                    {NAV_LINKS.map((link)=>(
                        <Link key={link.href} href={link.href} className={linkClass(link.href)} >
                            {link.label}
                        </Link>
                    ))
                    

                    }
                </nav>


            </Container>

        </header>




    );



}
