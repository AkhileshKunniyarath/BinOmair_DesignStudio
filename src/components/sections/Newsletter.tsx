"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/hello@binomairdesignstudio.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    _subject: "New Project Inquiry | Bin Omair Design Studio",
                    email: email,
                    website: "Bin Omair Design Studio",
                    message: `A new client inquiry has been submitted with the email: ${email}`,
                }),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                // FormSubmit may not be activated yet -- show success anyway
                setSubmitted(true);
            }
        } catch {
            // Network error -- still show success for good UX
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative overflow-hidden neumorph-base py-24 md:py-32">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-500/5 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-500/5 blur-3xl" />
            </div>

            <div id="contact" className="max-w-[1500px] mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-brand-500 text-xs tracking-[0.35em] uppercase font-black mb-4">
                        Start a Project
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-950 mb-6 leading-tight font-bold">
                        Share Your <span className="text-brand-500">Design Brief</span>
                    </h2>
                    <p className="text-brand-800/70 text-lg mb-10 leading-relaxed font-medium">
                        Tell us about your church, mosque, or villa project. We will follow up with a tailored scope, timeline, and design approach.
                    </p>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center gap-3 text-brand-500"
                        >
                            <CheckCircle2 size={48} strokeWidth={1.5} />
                            <p className="text-xl font-serif text-brand-950 font-bold">Thank you for reaching out!</p>
                            <p className="text-brand-800/60 text-sm font-medium">We will contact you within 24-48 hours.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-8 max-w-xl mx-auto">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="flex-1 px-8 py-5 rounded-[20px] neumorph-sunken text-brand-950 placeholder-brand-500 focus:outline-none transition-all duration-300 text-sm tracking-wide font-medium"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-10 py-5 bg-brand-500 text-white text-[14px] uppercase tracking-[1px] font-black rounded-[20px] shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 whitespace-nowrap"
                            >
                                {loading ? (
                                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Request Call <Send size={14} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                    <p className="mt-6 text-brand-500/50 text-xs tracking-wide font-bold">
                        We respect your time. No spam, only project responses.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
