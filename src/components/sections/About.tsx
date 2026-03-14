"use client";

import { motion } from "framer-motion";
import { Compass, Layers, Sun } from "lucide-react";

const About = () => {
    return (
        <section id="studio" className="pb-24 pt-12 md:pb-32 md:pt-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xs tracking-[0.35em] text-brand-500 uppercase font-semibold mb-4">The Studio</h2>
                        <h3 className="text-4xl md:text-5xl font-serif text-brand-950 leading-tight mb-8">
                            Design for <br />
                            <span className="text-brand-500">Ritual, Light, and Memory</span>
                        </h3>
                        <p className="text-brand-800 text-lg leading-relaxed mb-6">
                            Bin Omair Design Studio delivers 3D interior and exterior designs for sacred, commercial, and residential spaces. We shape churches, mosques, and villas with a balance of reverence, clarity, and modern craft.
                        </p>
                        <p className="text-brand-800 text-base leading-relaxed">
                            Our process moves from concept visualization to turnkey execution and fit-out works. Every space is mapped for flow, guided by light, and finished with materials chosen for durability and elegance.
                        </p>
                    </motion.div>

                    {/* Visual / Principles */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="grid gap-5"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6 }}
                            className="relative h-64 md:h-80 rounded-3xl overflow-hidden border border-brand-200/60"
                        >
                            <img
                                src="https://images.pexels.com/photos/1470164/pexels-photo-1470164.jpeg?cs=srgb&dl=pexels-enginakyurt-1470164.jpg&fm=jpg"
                                alt="Colorful materials flat lay"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: 0.05 }}
                            className="rounded-3xl border border-brand-200/60 p-6 bg-white shadow-[0_16px_40px_-30px_rgba(0,0,0,0.35)]"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-full bg-brand-500/15 flex items-center justify-center text-brand-500">
                                    <Compass size={20} />
                                </div>
                                <h4 className="text-lg font-semibold text-brand-900">Sacred Flow</h4>
                            </div>
                            <p className="text-brand-700 text-sm leading-relaxed">
                                We choreograph movement from entry to altar or mihrab, ensuring respectful procession and calm transitions.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="rounded-3xl border border-brand-200/60 p-6 bg-brand-50"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-full bg-brand-500/15 flex items-center justify-center text-brand-500">
                                    <Sun size={20} />
                                </div>
                                <h4 className="text-lg font-semibold text-brand-900">Natural Light</h4>
                            </div>
                            <p className="text-brand-700 text-sm leading-relaxed">
                                Layered lighting balances daylight and warm ambience to highlight carvings, calligraphy, and craft.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="rounded-3xl border border-brand-200/60 p-6 bg-white"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-full bg-brand-500/15 flex items-center justify-center text-brand-500">
                                    <Layers size={20} />
                                </div>
                                <h4 className="text-lg font-semibold text-brand-900">Material Integrity</h4>
                            </div>
                            <p className="text-brand-700 text-sm leading-relaxed">
                                Stone, timber, plaster, and metal are selected for durability and the way they mature in sacred settings.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
