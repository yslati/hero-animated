"use client"

import { ShoppingBasketIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCurrentPath } from "@/app/hooks/useCurrentPath";
import { menu } from "@/app/data/data";

const Navbar = () => {
    const pathname = useCurrentPath();
    
    return (
        <nav className="w-full flex md:flex-row flex-col items-center justify-between md:container md:mx-auto py-6 px-4 md:gap-x-0">
            <Link href="/" className="flex items-center md:mb-0 mb-2">
                <h1 className="md:text-2xl text-3xl font-inter_semibold">
                    YASSIN
                </h1>
            </Link>
            <ul className="md:w-auto w-full flex items-center md:gap-x-3 text-foreground border-[3px] border-foreground rounded-full md:px-10 md:py-3 px-5 py-2">
                {menu.map((item, index) => (
                    <motion.li key={index} className={`md:text-lg text-sm font-inter_medium rounded-full transition-all duration-300 relative px-5 py-1  ${pathname === item.href ? "bg-foreground text-background" : ""}`}>
                        <Link href={item.href} className="z-10 relative">
                            {item.name}
                        </Link>
                        {pathname === item.href &&
                        <motion.span
                            layoutId="pill-tab"
                            transition={{ type: 'spring', duration: 0.5 }}
                            className="absolute inset-0 z-0 rounded-full bg-foreground"
                        />}
                    </motion.li>
                ))}
            </ul>
            <button className="md:flex hidden md:p-3 p-2 bg-foreground rounded-full">
                <ShoppingBasketIcon className="md:w-6 md:h-6 w-5 h-5 text-background" />
            </button>
        </nav>
    );
}
 
export default Navbar;