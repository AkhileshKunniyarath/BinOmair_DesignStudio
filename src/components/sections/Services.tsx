"use client";

import { motion } from "framer-motion";
import { Landmark, Home, Ruler, Sparkles, Building2 } from "lucide-react";

const services = [
    {
        id: "interior-exterior-3d",
        title: "3D Interior & Exterior Designs",
        description: "Visualize sacred and residential projects with clear spatial planning, lighting intent, and material direction.",
        bullets: ["Church & mosque concepts", "Villa visualization", "Lighting studies", "Material mockups"],
        icon: Landmark,
        accent: "from-[#e2e5f0] to-[#c6ccdf]",
    },
    {
        id: "commercial-residential",
        title: "Commercial & Residential Interiors",
        description: "Thoughtful interiors for community spaces, villas, and sacred environments that prioritize flow and comfort.",
        bullets: ["Prayer halls + lounges", "Living & dining suites", "Finishes & furnishings", "Wayfinding"],
        icon: Sparkles,
        accent: "from-[#c6ccdf] to-[#a4adc7]",
    },
    {
        id: "fitout-works",
        title: "Fit-out Works",
        description: "On-site execution and fit-out delivery with a focus on craftsmanship, timelines, and site safety.",
        bullets: ["Joinery + cladding", "Ceiling systems", "MEP coordination", "Site supervision"],
        icon: Home,
        accent: "from-[#a4adc7] to-[#7f8ab1]",
    },
    {
        id: "turnkey-projects",
        title: "Turnkey Projects",
        description: "End-to-end project delivery from concept and approvals through procurement and handover.",
        bullets: ["Scope + budgeting", "Vendor management", "Project scheduling", "Quality control"],
        icon: Ruler,
        accent: "from-[#7f8ab1] to-[#4b587f]",
    },
    {
        id: "elevation-designs",
        title: "Elevation Designs",
        description: "Refined exterior elevations that balance cultural identity with contemporary architectural lines.",
        bullets: ["Facade studies", "Material palettes", "Entry statements", "Lighting accents"],
        icon: Building2,
        accent: "from-[#c6ccdf] to-[#7f8ab1]",
    },
];

const Services = () => {
    return (
        <section id="expertise" className="py-24 md:py-32 bg-brand-50 border-y border-brand-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-xs tracking-[0.35em] text-brand-500 uppercase font-semibold mb-4">Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-brand-950">Design Studio <span className=" text-brand-500">Services</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                id={service.id}
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 0.7, delay: index * 0.05 }}
                                className="rounded-3xl border border-brand-200/60 bg-white p-7 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.4)]"
                            >
                                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center text-brand-700 mb-6`}>
                                    <Icon size={26} />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-serif text-brand-950 mb-4">{service.title}</h4>
                                <p className="text-brand-800 leading-relaxed text-base mb-6">
                                    {service.description}
                                </p>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-brand-800">
                                    {service.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
