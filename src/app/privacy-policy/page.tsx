import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-gray-50 pt-16 md:pt-20">
            <Header />
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl pt-4 pb-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-950 font-bold mb-6">Privacy Policy</h1>

                <div className="prose prose-lg text-brand-800 space-y-8">
                    <p className="font-semibold text-lg">Last updated: March 14, 2026</p>

                    <section>
                        <h2 className="text-xl md:text-2xl font-serif text-brand-950 font-bold mb-3">1. Introduction</h2>
                        <p>
                            Welcome to Bin Omair Design Studio ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at hello@binomairdesignstudio.com.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-serif text-brand-950 font-bold mb-3">2. Information We Collect</h2>
                        <p className="mb-4">
                            We collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Express an interest in obtaining information about us or our products and services.</li>
                            <li>Subscribe to our newsletter or register on our website.</li>
                            <li>Contact us through customer support channels or email.</li>
                        </ul>
                        <p className="mt-4">
                            The personal information that we collect depends on the context of your interactions with us, the choices you make, and the features you use. The personal information we collect may include names, phone numbers, email addresses, and similar contact information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-serif text-brand-950 font-bold mb-3">3. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use personal information collected via our website for a variety of business purposes described below:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To send administrative information to you.</li>
                            <li>To fulfill and manage your interior design projects or requests.</li>
                            <li>To send you marketing and promotional communications (like our newsletter) if you have opted in.</li>
                            <li>To respond to user inquiries and offer support to users.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-serif text-brand-950 font-bold mb-3">4. Sharing Your Information</h2>
                        <p>
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell, rent, or trade your personal information to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-serif text-brand-950 font-bold mb-3">5. Contact Us</h2>
                        <p>
                            If you have questions or comments about this notice, you may email us at:
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
