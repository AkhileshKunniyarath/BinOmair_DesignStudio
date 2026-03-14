"use client";

import { motion } from "framer-motion";

const ImageSection = () => {
    return (
        <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
            <motion.div 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/projects/studio-hero.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-brand-950/20 z-10" />
            
            <div className="container relative z-20 mx-auto px-4 h-full flex items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 drop-shadow-lg">
                        Crafting Sacred Spaces <br />
                        <span className="text-brand-200">with Timeless Precision.</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand-400 mx-auto rounded-full shadow-lg" />
                </motion.div>
            </div>
        </section>
    );
};

export default ImageSection;
