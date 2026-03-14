"use client";

import { motion } from "framer-motion";

const leaders = [
    { name: "Bilal N.", role: "Design Director", focus: "Sacred spatial planning, liturgical flow, and material direction." },
    { name: "Noora M.", role: "Interior Architect", focus: "Prayer hall ambience, acoustics, and lighting strategy." },
    { name: "Imran K.", role: "Project Lead", focus: "On-site coordination, artisan teams, and procurement." },
];

const values = [
    { name: "Reverence", text: "Every decision respects the spiritual and cultural significance of the space." },
    { name: "Clarity", text: "We design for navigation, procession, and calm transitions." },
    { name: "Craft", text: "Detailing celebrates the hands behind the work." },
    { name: "Longevity", text: "Materials are chosen to age beautifully in high-use sacred settings." },
];

const Team = () => {
    return (
        <section className="py-24 md:py-32 neumorph-base relative overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-xs tracking-[0.35em] text-brand-500 uppercase font-semibold mb-4">The People</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-brand-950 mb-6 leading-tight">
                        A Studio Built on <span className="text-brand-500">Sacred Craft</span>
                    </h3>
                    <p className="text-brand-800/70 text-lg md:text-xl leading-relaxed font-medium max-w-3xl">
                        Bin Omair brings together architects, interior designers, and artisan partners who understand spiritual space. We blend traditional craftsmanship with contemporary planning to deliver calm, dignified interiors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="grid gap-5"
                    >
                        {leaders.map((leader, idx) => (
                            <div key={idx} className="rounded-[20px] neumorph-flat p-6 transition-all group hover:scale-[1.02]">
                                <p className="text-brand-950 text-lg font-bold tracking-tight">{leader.name}</p>
                                <p className="text-brand-500 text-[10px] uppercase tracking-[3px] mt-1 font-black">{leader.role}</p>
                                <p className="text-brand-800/70 text-sm mt-4 leading-relaxed font-medium">{leader.focus}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                    >
                        <h4 className="text-2xl md:text-3xl font-serif text-brand-950 font-bold mb-8">
                            Studio Values
                        </h4>
                        <ul className="space-y-4">
                            {values.map((val, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                                    className="flex items-start gap-4 text-brand-800/80 text-base md:text-lg font-medium"
                                >
                                    <span className="mt-2.5 w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" />
                                    <div>
                                        <strong className="font-bold text-brand-950 tracking-tight">{val.name}:</strong> {val.text}
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Team;
