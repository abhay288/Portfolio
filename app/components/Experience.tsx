"use client";

import { motion } from "framer-motion";
import { experiences } from "@/app/data/portfolio";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-12 text-center"
                >
                    My <span className="text-gradient">Experience</span>
                </motion.h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-[25%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => {
                            const Icon = exp.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="relative flex flex-col md:flex-row md:items-start group"
                                >
                                    {/* LEFT: Date/Duration (Desktop) */}
                                    <div className="hidden md:flex md:w-[25%] pr-8 justify-end items-start pt-2">
                                        <div className="flex flex-col items-end text-right">
                                            <span className="text-lg font-bold text-white mb-1">{exp.duration}</span>
                                            <span className="text-sm text-purple-400 font-mono">{exp.location}</span>
                                        </div>
                                    </div>

                                    {/* CENTER: Timeline Dot */}
                                    <div className="absolute left-8 md:static md:w-auto md:translate-x-[-50%] flex flex-col items-center">
                                        <div className="w-4 h-4 rounded-full bg-black border-2 border-purple-500 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform duration-300 mt-2.5" />
                                    </div>

                                    {/* RIGHT: Content Card */}
                                    <div className="ml-16 md:ml-8 md:w-[75%]">
                                        <div className="glass p-5 md:p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all hover:-translate-y-1 relative overflow-hidden group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)]">
                                            {/* Glow Effect */}
                                            <div className={`absolute inset-0 ${exp.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                                            <div className="relative z-10">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className={`p-2 rounded-md ${exp.bg} ${exp.color} border border-white/5`}>
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                                        <span className="text-sm font-mono text-purple-400 font-semibold tracking-wider uppercase block">
                                                            {exp.company}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Mobile Duration/Location (Visible only on mobile) */}
                                                <div className="md:hidden flex flex-wrap gap-3 text-xs text-gray-500 mb-4 mt-2">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {exp.duration}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="w-3 h-3" />
                                                        {exp.location}
                                                    </span>
                                                </div>

                                                <ul className="space-y-1 text-gray-400 text-sm mt-4">
                                                    {exp.description.slice(0, 3).map((item, i) => (
                                                        <li key={i} className="leading-relaxed flex items-start gap-2">
                                                            <span className="text-purple-500 mt-1.5">•</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                    {exp.description.length > 3 && (
                                                        <li className="text-purple-400/70 italic text-xs mt-2 pl-3">
                                                            + {exp.description.length - 3} more highlights...
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
