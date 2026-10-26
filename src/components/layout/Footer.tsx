// Server Component: no state, no clicks → no "use client".

import Link from "next/link";
import Container from "@/components/ui/Container";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

//Footer Links
const SUPPORT_LINKS =[
    {label: "Contact Us", href: "/contact"},
    {label: "Shipping Policy", href: "/shipping"},
    {label: "Return", href: "/returns"},
    {label: "FAQ", href:"/faq"},
];

export default function Footer () {
    return(
        // mt-auto → pushes footer to the bottom on short pages
        <footer className="mt-auto border-t border-gray-200 bg-surface" >
            
            {/* 1 column on phones → 2 on tablets → 4 on desktops */}
            <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4" > 

                <div>
                    <h3 className="text-lg font-bold">
                        {SITE_NAME}
                    </h3>

                    <p className="mt-2 text-sm text-muted" >
                        Quality products, delivered to your door.
                    </p>
                </div>
                


            </Container>


        </footer>
        

    );
}