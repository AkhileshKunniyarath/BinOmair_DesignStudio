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
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 w-full z-50 transition-all duration-500 ease-in-out bg-white/90 backdrop-blur border-b border-brand-200/40 py-3"
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Section */}
                <motion.div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => {
                        if (pathname === '/') {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                            router.push('/');
                        }
                    }}
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="h-10 w-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-semibold tracking-wide">
                        BO
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="tracking-widest font-semibold text-base sm:text-lg md:text-xl transition-colors duration-300 leading-none text-brand-950 uppercase">
                            Bin Omair
                        </span>
                        <span className="text-[0.55rem] sm:text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.35em] text-brand-600 font-semibold leading-none">
                            design studio
                        </span>
                    </div>
                </motion.div>

                {/* Navigation Menu */}
                <nav className="hidden md:flex gap-10">
                    {NAV_LINKS.map((link, index) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative text-xs uppercase tracking-[0.22em] font-medium transition-colors duration-300 py-2 text-brand-800 hover:text-brand-500"
                        >
                            {link.label}

                            {/* Animated Underline */}
                            <motion.div
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-500"
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{
                                    scaleX: hoveredIndex === index ? 1 : 0,
                                    opacity: hoveredIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{ transformOrigin: "left" }}
                            />
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-brand-950 p-2 z-[60]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-4 mt-2 w-56 bg-white rounded-lg shadow-2xl border border-brand-200/40 py-2 md:hidden z-50 transform origin-top-right overflow-hidden"
                >
                    <nav className="flex flex-col">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium text-brand-900 hover:text-brand-500 hover:bg-brand-50/60 transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
