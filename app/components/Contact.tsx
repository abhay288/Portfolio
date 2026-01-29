"use client";

import { motion } from "framer-motion";
import { personalDetails } from "@/app/data/portfolio";
import { Send, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Construct mailto link
        const subject = `Portfolio Contact from ${formState.name}`;
        const body = `Name: ${formState.name}%0D%0AEmail: ${formState.email}%0D%0A%0D%0AMessage:%0D%0A${formState.message}`;
        const mailtoLink = `mailto:${personalDetails.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Open default email client
        window.location.href = mailtoLink;

        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: "", email: "", message: "" });
        }, 1000);
    };

    return (
        <section id="contact" className="py-24 px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        Let&apos;s <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Have a project in mind or want to discuss GovTech, AI, or Full-Stack innovations? I&apos;m always open to new opportunities.
                    </p>

                    <div className="space-y-6 mb-12">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <Mail className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">{personalDetails.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-pink-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-medium">{personalDetails.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {personalDetails.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-full bg-white/5 hover:bg-purple-600 hover:scale-110 transition-all text-white"
                                aria-label={social.name}
                            >
                                <social.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="glass p-8 md:p-10 rounded-3xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                placeholder="John Doe"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                placeholder="john@example.com"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                placeholder="Your message..."
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? "Sending..." : (
                                <>Send Message <Send className="w-5 h-5" /></>
                            )}
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
