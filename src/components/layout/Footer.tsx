// Server Component: no state, no clicks → no "use client".

import Link from "next/link";
import Container from "@/components/ui/Container";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cacheLife } from "next/cache";

//Footer Links
const SUPPORT_LINKS = [
    { label: "Contact Us", href: "/contact" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "Return", href: "/returns" },
    { label: "FAQ", href: "/faq" },
];

//Copyright Year
// new Date() changes every call, so Cache Components won't prerender
// it directly. "use cache" stores the result; cacheLife("days")
// refreshes it daily, so the year rolls over on its own.

async function CopyrightYear(){
    "use cache";
    cacheLife("days");
    return <>{new Date().getFullYear()}</>;
}


export default function Footer() {
    return (
        // mt-auto → pushes footer to the bottom on short pages
        <footer className="mt-auto border-t border-gray-200 bg-surface" >

            {/* 1 column on phones → 2 on tablets → 4 on desktops */}
            <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4" >


                {/* 1st column*/}
                <div>
                    <h3 className="text-lg font-bold">
                        {SITE_NAME}
                    </h3>

                    <p className="mt-2 text-sm text-muted" >
                        The fashion you need!
                    </p>
                </div>


                {/* 2nd column*/}
                <div>
                    <h4 className="mb-3 font-semibold" >Shop</h4>
                    <ul className="space-y-2" >
                        {NAV_LINKS.map((link) => (
                            <li key={link.href} >
                                <Link
                                    href={link.href}
                                    className="text-sm text-muted hover:text-brand"
                                >
                                    {link.label}
                                </Link>
                            </li>

                        ))}

                    </ul>

                </div>

                {/* 3rd column*/}
                <div>
                    <h4 className="mb-3 font-semibold" >Support</h4>
                    <ul className="spacy-y-2" >
                        {SUPPORT_LINKS.map((link) => (
                            <li key={link.href} >
                                <Link
                                    href={link.href}
                                    className="text-sm text-muted hover:text-brand"

                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))

                        }

                    </ul>
                </div>

                {/* 4th column*/}
                <div>
                    <h4 className="mb-3 font-semibold" >NewsLetter</h4>
                    <p className="mb-3 text-sm text-muted">Get deals straight to your inbox.</p>

                    <form className="flex gap-2" >
                        <label htmlFor="newsletter-email" className="sr-only" >
                            Email adress
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            required
                            placeholder="Your email"
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand"
                        />

                        <button
                            type="submit"
                            className="rounded-lg bg-brand px-4 text-sm text-white hover:bg-brand-light"
                        
                        >
                            Join
                        </button>



                    </form>






                </div>





            </Container>

            {/*Bottom Bar*/}
            <div className="border-t border-gray-200 py-4 text-center text-sm text-muted" >
                © <CopyrightYear /> {SITE_NAME}. All rights reserved.
            </div>


        </footer>


    );
}