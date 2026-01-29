"use client";

import { motion } from "framer-motion";
import { creativePursuits } from "@/app/data/portfolio";
import { Camera, Medal, Trophy, Star, Aperture } from "lucide-react";

const icons = {
    "silver-medal": Medal,
    "award": Trophy,
    "star": Star
};

export default function CreativeInterests() {
    return (
        <section id="creative" className="py-24 px-6 relative bg-gradient-to-b from-black to-purple-900/10 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 mx-auto">
                        <Camera className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-medium text-gray-300">Beyond The Code</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Creative <span className="text-gradient">Interests</span> & Achievements
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        {creativePursuits.intro}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {creativePursuits.awards.map((award, idx) => {
                        // @ts-ignore
                        const Icon = icons[award.icon] || Trophy;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />

                                <div className="relative h-full glass p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                                        <Icon className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                                        {award.title}
                                    </h3>

                                    <div className="text-sm font-mono text-purple-400 mb-4 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                                        {award.event}
                                    </div>

                                    <p className="text-sm text-gray-500 font-semibold mb-3 uppercase tracking-wider">
                                        {award.organization}
                                    </p>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {award.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Decorative Camera Icon */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -left-20 text-white/5 pointer-events-none hidden lg:block"
                >
                    <Aperture className="w-96 h-96" />
                </motion.div>
            </div>
        </section>
    );
}
