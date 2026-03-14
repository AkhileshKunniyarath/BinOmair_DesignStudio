import { MapPin, Phone, Mail, ArrowRight, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-brand-50 border-t border-brand-200/50 pt-12 pb-6">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-10">

                    {/* Brand Info */}
                    <div className="lg:col-span-1 flex flex-col items-start">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-11 w-11 rounded-full bg-brand-500 text-white flex items-center justify-center font-semibold tracking-wide">
                                BO
                            </div>
                            <div className="flex flex-col items-start">
                                <h2 className="tracking-widest font-semibold text-xl text-brand-950 uppercase leading-none">
                                    Bin Omair
                                </h2>
                                <span className="text-[0.6rem] uppercase tracking-[0.35em] text-brand-600 font-semibold leading-none">
                                    design studio
                                </span>
                            </div>
                        </div>
                        <p className="text-brand-700 leading-relaxed mb-6 text-sm md:text-base">
                            3D interior and exterior designs with commercial and residential expertise, fit-out works, turnkey projects, and elevation designs.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-6">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}
                            >
                                <Instagram size={18} strokeWidth={2.5} />
                            </a>
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                style={{ background: "#1877F2" }}
                            >
                                <Facebook size={18} strokeWidth={2.5} />
                            </a>
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/971501832000"
                                aria-label="WhatsApp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                style={{ background: "#25D366" }}
                            >
                                <MessageCircle size={18} strokeWidth={2.5} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-1 lg:pl-8">
                        <h4 className="text-brand-950 font-medium text-lg tracking-wider mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm md:text-base">
                            <li><a href="/#studio" className="text-brand-700 hover:text-brand-500 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-brand-500/70" /> Studio</a></li>
                            <li><a href="/#expertise" className="text-brand-700 hover:text-brand-500 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-brand-500/70" /> Expertise</a></li>
                            <li><a href="/#sacred-works" className="text-brand-700 hover:text-brand-500 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-brand-500/70" /> Sacred Works</a></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-1">
                        <h4 className="text-brand-950 font-medium text-lg tracking-wider mb-6">Contact Us</h4>
                        <ul className="space-y-6 text-sm md:text-base">
                            <li className="flex items-start gap-4 text-brand-700">
                                <MapPin className="text-brand-500 shrink-0 mt-1" size={18} />
                                <span className="leading-relaxed">City Tower, Market Road,<br />Bank Junction, Aluva</span>
                            </li>
                            <li className="flex items-center gap-4 text-brand-700">
                                <Phone className="text-brand-500 shrink-0" size={18} />
                                <div className="flex flex-col gap-1">
                                    <a href="tel:6238574964" className="hover:text-brand-500 transition-colors">
                                        6238574964
                                    </a>
                                    <a href="tel:+971501832000" className="hover:text-brand-500 transition-colors">
                                        +971 501 832 000 (UAE)
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 text-brand-700">
                                <Mail className="text-brand-500 shrink-0" size={18} />
                                <a href="mailto:hello@binomairdesignstudio.com" className="hover:text-brand-500 transition-colors break-all">hello@binomairdesignstudio.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Services List (linked to individual service anchors) */}
                    <div className="lg:col-span-1">
                        <h4 className="text-brand-950 font-medium text-lg tracking-wider mb-6">Our Services</h4>
                        <ul className="space-y-4 text-sm md:text-base">
                            <li><a href="/#interior-exterior-3d" className="text-brand-700 hover:text-brand-500 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-brand-500/70" /> 3D Designs</a></li>
                            <li><a href="/#commercial-residential" className="text-brand-700 hover:text-brand-500 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-brand-500/70" /> Interiors</a></li>
                            <li><a href="/#fitout-works" className="text-brand-700 hover:text-brand-500 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-brand-500/70" /> Fit-out Works</a></li>
                            <li><a href="/#turnkey-projects" className="text-brand-700 hover:text-brand-500 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-brand-500/70" /> Turnkey Projects</a></li>
                            <li><a href="/#elevation-designs" className="text-brand-700 hover:text-brand-500 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-brand-500/70" /> Elevation Designs</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-brand-600/60 text-sm">
                        &copy; {new Date().getFullYear()} Bin Omair Design Studio. All rights reserved.
                    </p>
                    <div className="text-brand-600/60 text-sm flex gap-6">
                        <a href="/privacy-policy" className="hover:text-brand-500 transition-colors">Privacy Policy</a>
                        <a href="/terms-of-service" className="hover:text-brand-500 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
