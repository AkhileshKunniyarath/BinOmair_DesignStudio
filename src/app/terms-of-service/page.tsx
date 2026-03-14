import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-gray-50 pt-16 md:pt-20">
            <Header />
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl pt-4 pb-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-950 font-bold mb-6">Terms and Conditions</h1>

                <div className="prose prose-lg text-brand-800 space-y-8">
                    <p className="font-semibold text-lg">Last updated: March 14, 2026</p>

                    <section>
                        <h2 className="text-xl md:text-2xl font-serif text-brand-950 font-bold mb-3">1. Agreement to Terms</h2>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this site. These Terms and Conditions apply to all visitors, users, and others who access or use the Website for Bin Omair Design Studio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-serif text-brand-950 font-bold mb-3">2. Intellectual Property Rights</h2>
                        <p>
                            Other than the content you own, under these Terms, Bin Omair Design Studio and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website. You may not reproduce, republish, or distribute any materials without our written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-serif text-brand-950 font-bold mb-3">3. Design and Service Consultations</h2>
                        <p>
                            The information and portfolios displayed on this website are for general informational purposes. Any specific design consultations, quotes, or services requested through this site will be subject to a separate, formal contract that explicitly details the scope, cost, and timeline of the interior or exterior project. Submitting a contact form or subscribing to a newsletter does not constitute a binding service contract.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-serif text-brand-950 font-bold mb-3">4. Limitation of Liability</h2>
                        <p>
                            In no event shall Bin Omair Design Studio, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Bin Omair Design Studio, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-serif text-brand-950 font-bold mb-3">5. Governing Law & Jurisdiction</h2>
                        <p>
                            These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Kerala, India for the resolution of any disputes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-serif text-brand-950 font-bold mb-3">6. Contact Information</h2>
                        <p>
                            If you have questions about these Terms, please contact us at:
                            <br />
                            <strong>Email:</strong> <a href="mailto:hello@binomairdesignstudio.com" className="text-brand-500 hover:underline">hello@binomairdesignstudio.com</a>
                            <br />
                            <strong>Phone:</strong> +91 8590 289 402
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
