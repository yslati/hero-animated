"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.section className="2xl:h-[80vh] h-[70vh] max-h-screen md:flex hidden bg-foreground rounded-[60px] 2xl:container 2xl:mx-auto mx-10">
            <div className="w-1/2 2xl:pl-10 pl-8 2xl:py-32 py-24 flex flex-col">
                <h1 className="h-full text-white font-inter_extrabold flex flex-col relative">
                    <motion.span className="2xl:text-[5rem] xl:text-[4rem] lg:text-[2.5rem] text-[2rem] absolute 2xl:bottom-[15rem] xl:bottom-[11.5rem] lg:bottom-[9rem] bottom-[7.5rem] 2xl:right-32 xl:right-24 lg:right-20 right-16"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        WE’VE GOT
                    </motion.span>
                    <motion.span className="2xl:text-[7.5rem] xl:text-[6rem] lg:text-[4.5rem] text-[3.2rem] absolute 2xl:bottom-[7rem] xl:bottom-[5.5rem] lg:bottom-[4.2rem] bottom-[3.5rem] 2xl:-right-[12rem] xl:-right-[10rem] lg:-right-[6rem] -right-[4.5rem]"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        CLOTHES
                    </motion.span>
                    <div className="flex 2xl:-space-x-24 xl:-space-x-20 lg:-space-x-16 -space-x-12 absolute bottom-0 right-0">
                        <motion.span className="2xl:text-[2.9rem] xl:text-[2.3rem] lg:text-[1.8rem] text-[1.25rem] -rotate-90"
                            initial={{ opacity: 0, x: -50, rotate: 0 }}
                            whileInView={{ opacity: 1, x: 0, rotate: -90 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            viewport={{ once: true }}
                        >
                            FOR
                        </motion.span>
                        <motion.span className="2xl:text-[7.9rem] xl:text-[6.2rem] lg:text-[4.8rem] text-[3.4rem] lg:pl-2 pl-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.3 }}
                            viewport={{ once: true }}
                        >
                            EVERYONE
                        </motion.span>
                    </div>
                </h1>
                <div className="mt-auto flex flex-col space-y-5 ">
                    <motion.p className="max-w-xs text-background font-inter_regular text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2 }}
                        viewport={{ once: true }}
                    >
                        Our streetwear is designed to help you stand tall,
                        break boundaries, and make your mark
                        Our streetwear is designed to help you stand tall,
                        break boundaries, and make your mark
                    </motion.p>
                    <Link href={"/shop"}>
                        <motion.button className="flex items-center gap-2 px-5 py-2 bg-background text-foreground rounded-full text-lg font-inter_bold"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 2.2 }}
                            viewport={{ once: true }}
                        >
                            Shop Now
                            <ChevronRight className="w-5 h-5 animate-pulse" />
                        </motion.button>
                    </Link>
                </div>
            </div>
            <div className="w-1/2 overflow-hidden rounded-r-[60px]">
                <Image src={"/Home/hero.png"} alt="hero image" width={800} height={800} 
                    className="object-cover object-center w-full h-full"
                />
            </div>
        </motion.section>
    );
}
 
export default Hero;