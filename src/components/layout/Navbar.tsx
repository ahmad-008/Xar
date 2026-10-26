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
                    {NAV_LINKS.map((link) => (
                        <Link key={link.href} href={link.href} className={linkClass(link.href)} >
                            {link.label}
                        </Link>
                    ))
                    }
                </nav>

                {/* ---------- Action icons ---------- */}
                <div  className="flex items-center gap-4" >
                    
                    {/* Wishlist */}
                    <Link href="/wishlist" aria-label="Wishlist" className="hover:text-accent" >
                        <Heart size={20} />
                    </Link>

                    {/* Cart with item-count badge */}
                    <Link href="/cart" aria-label="Cart" className="relative hover:text-accent">
                        <ShoppingCart size={20}/>
                        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] text-white" >
                            0
                        </span>
                    </Link>
                
                    {/* Account: hidden on tiny screens (it'll be in the mobile menu) */}
                    <Link href="/login" aria-label="Account" className="hidden hover:text-accent sm:block" >
                        <User size={20}/>
                    </Link>


                </div>



            </Container>

        </header>




    );



}
