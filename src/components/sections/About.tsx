"use client";

import { motion } from "framer-motion";
import { Compass, Layers, Sun } from "lucide-react";

const principles = [
    {
        icon: Compass,
        title: "Sacred Flow",
        description: "We choreograph movement from entry to altar or mihrab, ensuring respectful procession."
    },
    {
        icon: Sun,
        title: "Natural Light",
        description: "Layered lighting balances daylight and warm ambience to highlight carvings and craft."
    },
    {
        icon: Layers,
        title: "Material Integrity",
        description: "Stone, timber, and metal are selected for durability and how they mature over time."
    }
];

const About = () => {
    return (
        <section id="studio" className="py-24 md:py-32 neumorph-base relative overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="neumorph-flat rounded-[40px] p-8 md:p-16 lg:p-24 border-none">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        
                        {/* Left Side: Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl"
                        >
                            <span className="text-[10px] tracking-[4px] text-brand-500 uppercase font-black mb-6 block">The Studio</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-950 leading-[1.1] mb-10 tracking-tighter">
                                Design for <br />
                                <span className="text-brand-500/80">Ritual, Light, & Memory.</span>
                            </h2>
                            <div className="space-y-6 text-brand-800/80 text-[1rem] md:text-[1.1rem] leading-relaxed font-medium">
                                <p>
                                    Bin Omair Design Studio delivers 3D interior and exterior designs for sacred, commercial, and residential spaces. We shape churches, mosques, and villas with a balance of reverence, clarity, and modern craft.
                                </p>
                                <p>
                                    Our process moves from concept visualization to turnkey execution and fit-out works. Every space is mapped for flow, guided by light, and finished with materials chosen for durability and elegance.
                                </p>
                            </div>

                            <motion.div 
                                className="mt-12 pt-12 border-t border-brand-100"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-3xl font-bold text-brand-950 mb-1">20+</div>
                                        <div className="text-[10px] uppercase tracking-[2px] font-black text-brand-500">Sacred Projects</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-brand-950 mb-1">2024</div>
                                        <div className="text-[10px] uppercase tracking-[2px] font-black text-brand-500">Studio Established</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Side: Visuals & Cards */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative rounded-[20px] overflow-hidden shadow-2xl h-[400px]"
                            >
                                <img
                                    src="/hero-interior-v2.png"
                                    alt="Studio interior"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
                                {principles.map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                        className="neumorph-button rounded-[20px] p-6 flex items-start gap-5 group hover:bg-brand-950 transition-all duration-500"
                                    >
                                        <div className="h-10 w-10 shrink-0 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 group-hover:bg-white/10 group-hover:text-white transition-colors">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-950 mb-1 group-hover:text-white transition-colors tracking-tight">{item.title}</h4>
                                            <p className="text-brand-700 text-xs leading-relaxed group-hover:text-white/70 transition-colors">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
