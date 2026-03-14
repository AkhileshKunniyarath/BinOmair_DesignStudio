"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const projects = [
    {
        title: "St. Michael Nave Renewal",
        location: "Kochi",
        type: "Church Interior",
        year: "2025",
        image: "https://images.unsplash.com/photo-Ti2BQgR8eng?auto=format&fit=crop&w=2000&q=80",
        alt: "Colorful church interior with stained glass",
    },
    {
        title: "Noor Prayer Hall",
        location: "Calicut",
        type: "Mosque Interior",
        year: "2024",
        image: "https://images.unsplash.com/photo-iB54dVWYkK4?auto=format&fit=crop&w=2000&q=80",
        alt: "Mosque interior with chandeliers and blue carpet",
    },
    {
        title: "Vallath Villa Suite",
        location: "Thrissur",
        type: "Villa Interior",
        year: "2025",
        image: "https://images.pexels.com/photos/7347375/pexels-photo-7347375.jpeg?cs=srgb&dl=pexels-silver-works-909675-7347375.jpg&fm=jpg",
        alt: "Colorful modern living room interior",
    },
    {
        title: "Al Noor Courtyard",
        location: "Malappuram",
        type: "Mosque Annex",
        year: "2023",
        image: "https://images.unsplash.com/photo-iB54dVWYkK4?auto=format&fit=crop&w=2000&q=80",
        alt: "Mosque interior with blue carpet",
    },
    {
        title: "Sacred Light Gallery",
        location: "Kannur",
        type: "Church Atrium",
        year: "2024",
        image: "https://images.unsplash.com/photo-Ti2BQgR8eng?auto=format&fit=crop&w=2000&q=80",
        alt: "Stained glass church interior",
    },
    {
        title: "Palm Grove Residence",
        location: "Kottayam",
        type: "Villa Interior",
        year: "2025",
        image: "https://images.pexels.com/photos/7347375/pexels-photo-7347375.jpeg?cs=srgb&dl=pexels-silver-works-909675-7347375.jpg&fm=jpg",
        alt: "Bright villa lounge interior",
    },
];

const Portfolio = () => {
    const [selected, setSelected] = useState<typeof projects[0] | null>(null);

    return (
        <section id="sacred-works" className="bg-white">
            <div className="py-20 md:py-28 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xs tracking-[0.35em] text-brand-500 uppercase font-semibold mb-4">Sacred Works</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-brand-950">
                        Curated <span className="text-brand-500">Portfolio</span>
                    </h3>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 pb-20 md:pb-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.button
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: i * 0.05 }}
                            onClick={() => setSelected(project)}
                            className="group text-left rounded-3xl border border-brand-200/60 overflow-hidden bg-white shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)]"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.alt}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/55 to-transparent" />
                            </div>
                            <div className="p-6">
                                <p className="text-xs uppercase tracking-[0.3em] text-brand-500 font-semibold mb-2">
                                    {project.type}
                                </p>
                                <h4 className="text-2xl font-serif text-brand-950 mb-3">{project.title}</h4>
                                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-brand-600">
                                    <span>{project.location}</span>
                                    <span>{project.year}</span>
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950/90 backdrop-blur-sm p-6"
                        onClick={() => setSelected(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[101]"
                            onClick={() => setSelected(null)}
                        >
                            <X size={36} strokeWidth={1} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.94, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.94, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 30 }}
                            className="max-w-3xl w-full rounded-3xl overflow-hidden bg-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={selected.image}
                                    alt={selected.alt}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/55 to-transparent" />
                            </div>
                            <div className="p-8">
                                <p className="text-xs uppercase tracking-[0.3em] text-brand-500 font-semibold mb-2">
                                    {selected.type}
                                </p>
                                <h4 className="text-3xl font-serif text-brand-950 mb-3">{selected.title}</h4>
                                <p className="text-brand-700 text-sm leading-relaxed mb-6">
                                    Designed to heighten reverence and clarity, this project balances light, geometry, and crafted surfaces for a dignified spiritual experience.
                                </p>
                                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-brand-600">
                                    <span>{selected.location}</span>
                                    <span>{selected.year}</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
