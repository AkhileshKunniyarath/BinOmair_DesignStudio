"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const NAV_LINKS = [
    { label: "Studio", href: "/#studio" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Sacred Works", href: "/#sacred-works" },
    { label: "Contact", href: "/#contact" },
];

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-[1300px] neumorph-flat rounded-[30px] py-1.5 px-4 sm:px-6"
            >
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <motion.div
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => {
                            if (pathname === '/') {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            } else {
                                router.push('/');
                            }
                        }}
                    >
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-brand-950 text-white flex items-center justify-center font-bold text-xs">
                            BO
                        </div>
                        <div className="flex flex-col">
                            <span className="tracking-[0.05em] font-bold text-sm sm:text-base leading-none text-brand-950 uppercase">
                                Bin Omair
                            </span>
                            <span className="text-[0.4rem] sm:text-[0.5rem] uppercase tracking-[0.4em] text-brand-500 font-bold leading-none mt-1">
                                studio
                            </span>
                        </div>
                    </motion.div>

                    {/* Navigation Menu */}
                    <nav className="hidden md:flex gap-10 lg:gap-14">
                        {NAV_LINKS.map((link, index) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative text-[0.6rem] lg:text-[0.7rem] uppercase tracking-[0.25em] font-black transition-colors duration-300 py-1 text-brand-950/70 hover:text-brand-950"
                            >
                                {link.label}
                                {hoveredIndex === index && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-brand-900"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <a 
                            href="/#contact"
                            className="hidden sm:inline-block px-7 py-3 bg-brand-950 text-white text-[14px] font-black uppercase tracking-[1px] rounded-[10px] hover:bg-black transition-all shadow-md active:scale-95"
                        >
                            Start a Project
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-brand-950 p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                {isMobileMenuOpen ? (
                                    <>
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </>
                                ) : (
                                    <>
                                        <line x1="3" y1="12" x2="21" y2="12"></line>
                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                        <line x1="3" y1="18" x2="21" y2="18"></line>
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="absolute top-full left-0 right-0 mt-4 mx-2 bg-white rounded-3xl shadow-2xl border border-brand-50 p-6 md:hidden z-50 flex flex-col gap-4 text-center"
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-[0.7rem] uppercase tracking-[0.25em] font-black text-brand-950 py-3"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a 
                            href="/#contact"
                            className="mt-4 px-6 py-4 bg-brand-900 text-white text-[14px] font-bold uppercase tracking-[1px] rounded-[10px]"
                        >
                            Start a Project
                        </a>
                    </motion.div>
                )}
            </motion.header>
        </div>
    );
};

export default Header;
