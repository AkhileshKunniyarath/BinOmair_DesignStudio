"use client";

import { motion } from "framer-motion";
import { Compass, Settings, MapPin } from "lucide-react";

const QuickDetails = () => {
    const details = [
        {
            title: "Signature Focus",
            icon: <Compass className="w-6 h-6 text-brand-500" />,
            items: [
                { label: "Prayer Hall Atmosphere", value: "Acoustics" },
                { label: "Material Harmony", value: "Stone + Wood" },
                { label: "Flow & Ritual", value: "Wayfinding" },
            ],
            bgColor: "bg-white",
            textColor: "text-brand-800",
            labelColor: "text-brand-500"
        },
        {
            title: "Service Lines",
            icon: <Settings className="w-6 h-6 text-brand-200" />,
            items: [
                "3D Interior & Exterior Designs",
                "Commercial & Residential Interiors",
                "Fit-out Works",
                "Turnkey Projects",
                "Elevation Designs",
            ],
            bgColor: "bg-brand-900",
            textColor: "text-white/80",
            labelColor: "text-brand-200"
        },
        {
            title: "Studio Locations",
            icon: <MapPin className="w-6 h-6 text-brand-500" />,
            content: "City Tower, Market Road, Bank Junction, Aluva",
            footer: "UAE contact available",
            bgColor: "bg-brand-50",
            textColor: "text-brand-700",
            labelColor: "text-brand-600"
        }
    ];

    return (
        <section className="py-24 bg-[#f2f1ec]">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {details.map((detail, index) => (
                        <motion.div
                            key={detail.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`${detail.bgColor} rounded-3xl border border-brand-200/50 p-8 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_-30px_rgba(0,0,0,0.15)] transition-all duration-500`}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-2xl bg-white shadow-sm border border-brand-100">
                                    {detail.icon}
                                </div>
                                <h3 className={`text-xs uppercase tracking-[0.3em] font-bold ${detail.labelColor}`}>
                                    {detail.title}
                                </h3>
                            </div>

                            {detail.items && Array.isArray(detail.items) && (
                                <ul className="space-y-4">
                                    {detail.items.map((item, i) => (
                                        typeof item === 'string' ? (
                                            <li key={i} className={`text-sm ${detail.textColor} flex items-center gap-3`}>
                                                <div className="w-1 h-1 rounded-full bg-brand-400" />
                                                {item}
                                            </li>
                                        ) : (
                                            <li key={i} className="flex items-center justify-between text-sm border-b border-brand-100/50 pb-3 last:border-0 last:pb-0">
                                                <span className={detail.textColor}>{item.label}</span>
                                                <span className={`${detail.labelColor} font-semibold`}>{item.value}</span>
                                            </li>
                                        )
                                    ))}
                                </ul>
                            )}

                            {detail.content && (
                                <div className="space-y-4">
                                    <p className={`text-sm leading-relaxed ${detail.textColor}`}>
                                        {detail.content}
                                    </p>
                                    {detail.footer && (
                                        <p className="text-xs text-brand-500 font-medium italic">
                                            {detail.footer}
                                        </p>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickDetails;
