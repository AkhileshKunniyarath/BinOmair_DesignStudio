"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden neumorph-base">
            {/* Background Texture/Grid */}
            <div
                className="absolute inset-0 z-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(180deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
                    backgroundSize: "120px 120px",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#e0e5ec] via-[#e0e5ec]/80 to-transparent z-[1]" />

            <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left content */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-brand-500 tracking-[0.45em] text-[0.65rem] sm:text-xs font-black uppercase mb-6"
                        >
                            Bin Omair Design Studio
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] font-bold text-brand-950 leading-[0.95] mb-8 tracking-tighter"
                        >
                            Crafting Sacred <br />
                            <span className="text-brand-500 tracking-tighter">& Modern Spaces.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-brand-900/80 text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-medium"
                        >
                            Bespoke interior and exterior designs for churches, mosques, and contemporary villas. We deliver complete 3D design, fit-out, and turnkey solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <a
                                href="/#sacred-works"
                                className="px-10 py-5 text-[14px] uppercase tracking-[1px] font-black bg-[#121523] text-white rounded-[15px] hover:scale-[1.02] transition-all shadow-[6px_6px_15px_rgba(0,0,0,0.2)]"
                            >
                                View Sacred Works
                            </a>
                            <a
                                href="/#contact"
                                className="px-10 py-5 text-[14px] uppercase tracking-[1px] font-black text-brand-900 rounded-[15px] neumorph-button"
                            >
                                Start a Project
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative h-[550px] md:h-[650px] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.3)] border-[1px] border-black/5"
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('/projects/church-gallery.png')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <p className="text-[0.6rem] uppercase tracking-[0.4em] font-black mb-2 opacity-80">Featured Project</p>
                            <h3 className="text-3xl font-bold">Sacred Architecture</h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
