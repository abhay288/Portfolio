"use client";

import { motion } from "framer-motion";
import { certifications } from "@/app/data/portfolio";
import { Award, Trophy } from "lucide-react";

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 px-6 relative overflow-hidden bg-black/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-3 mb-12"
                >
                    <Award className="w-8 h-8 text-purple-400" />
                    <h2 className="text-3xl font-bold text-center">Certifications & Badges</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all flex items-center gap-4 overflow-hidden"
                        >
                            {/* Hover Glow Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                <Award className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                            </div>

                            <div className="relative z-10 flex-1">
                                <span className="text-gray-200 font-medium group-hover:text-white transition-colors block">
                                    {cert}
                                </span>
                            </div>

                            {/* Decorative Sparkle */}
                            <motion.div
                                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                                className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full blur-[1px]"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
