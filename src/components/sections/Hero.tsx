"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative min-h-[80vh] md:min-h-[92vh] flex items-center overflow-hidden">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        "linear-gradient(120deg, rgba(244,245,249,0.9) 0%, rgba(255,255,255,0.9) 55%, rgba(233,235,242,0.9) 100%), url('https://images.unsplash.com/photo-Ti2BQgR8eng?auto=format&fit=crop&w=2000&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 z-0 opacity-60 bg-[linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:120px_120px]" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-brand-600 tracking-[0.35em] text-xs sm:text-sm font-semibold uppercase mb-5"
                        >
                            Bin Omair Design Studio
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.25 }}
                            className="text-4xl sm:text-5xl md:text-[3.8rem] lg:text-[4.4rem] font-serif text-brand-950 leading-[0.98] mb-6"
                        >
                            Interior & Exterior <br />
                            Designs for Churches, Mosques <br />
                            <span className="text-brand-500">and Contemporary Villas.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45 }}
                            className="text-brand-800 text-lg leading-relaxed max-w-xl mb-8"
                        >
                            We deliver 3D design, fit-out, and turnkey solutions for sacred and residential environments. From prayer halls to private residences, we craft spaces that honor tradition and modern life.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.65 }}
                            className="flex flex-col sm:flex-row gap-4 sm:items-center"
                        >
                            <a
                                href="/#sacred-works"
                                className="px-7 py-3 text-xs uppercase tracking-[0.3em] font-semibold bg-brand-500 text-white rounded-full hover:bg-brand-600 transition-colors text-center"
                            >
                                View Sacred Works
                            </a>
                            <a
                                href="/#contact"
                                className="px-7 py-3 text-xs uppercase tracking-[0.3em] font-semibold border border-brand-500 text-brand-700 rounded-full hover:bg-brand-500 hover:text-white transition-colors text-center"
                            >
                                Start a Project
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="bg-white/80 backdrop-blur rounded-3xl border border-brand-200/60 p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.4)]">
                            <p className="text-xs uppercase tracking-[0.3em] text-brand-500 font-semibold mb-3">Signature Focus</p>
                            <ul className="space-y-3 text-brand-800 text-sm">
                                <li className="flex items-center justify-between">
                                    <span>Prayer Hall Atmosphere</span>
                                    <span className="text-brand-500 font-semibold">Acoustics</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span>Material Harmony</span>
                                    <span className="text-brand-500 font-semibold">Stone + Wood</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span>Flow &amp; Ritual</span>
                                    <span className="text-brand-500 font-semibold">Wayfinding</span>
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="rounded-2xl bg-brand-900 text-white p-5">
                                <p className="text-xs uppercase tracking-[0.3em] text-brand-200 font-semibold mb-3">Service Lines</p>
                                <ul className="text-sm text-white/80 space-y-2">
                                    <li>3D Interior & Exterior Designs</li>
                                    <li>Commercial & Residential Interiors</li>
                                    <li>Fit-out Works</li>
                                    <li>Turnkey Projects</li>
                                    <li>Elevation Designs</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl bg-white border border-brand-200/60 p-5">
                                <p className="text-xs uppercase tracking-[0.3em] text-brand-500 font-semibold mb-3">Studio Locations</p>
                                <p className="text-sm text-brand-700 leading-relaxed">
                                    City Tower, Market Road, Bank Junction, Aluva
                                </p>
                                <p className="text-xs text-brand-500 mt-2">UAE contact available</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
