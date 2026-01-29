"use client";

import { motion } from "framer-motion";
import { achievements } from "@/app/data/portfolio";
import { ChevronDown, Trophy } from "lucide-react";
import { useState } from "react";

export default function Achievements() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section id="achievements" className="py-24 px-6 relative bg-gradient-to-b from-purple-900/10 to-black">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
                >
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Achievements & <span className="text-gradient">Hackathons</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl">
                            My journey through innovation, national-level competitions, and continuous learning.
                        </p>
                    </div>

                    <a
                        href="#creative"
                        className="flex items-center gap-2 group cursor-pointer flex-shrink-0"
                    >
                        <span className="text-sm text-gray-500 group-hover:text-purple-400 transition-colors uppercase tracking-widest font-semibold hidden md:block">
                            Explore Creative Interests
                        </span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-all">
                            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-y-1 transition-all -rotate-90 md:rotate-0" />
                        </div>
                    </a>
                </motion.div>

                <div className="relative space-y-8">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent -translate-x-1/2 md:translate-x-0 opacity-30" />

                    {achievements.map((item, index) => {
                        const Icon = item.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${isEven ? "" : "md:flex-row-reverse"}`}
                            >
                                {/* Timeline Node (Center) */}
                                <div className="absolute left-6 md:left-1/2 w-10 h-10 -translate-x-1/2 flex items-center justify-center z-10">
                                    <div className={`w-10 h-10 rounded-full ${item.bg} border-2 ${item.color.replace('text', 'border')} flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm`}>
                                        <Icon className={`w-5 h-5 ${item.color}`} />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? "md:text-right" : "md:text-left"}`}>
                                    <div
                                        className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer overflow-hidden"
                                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                    >
                                        <div className={`absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity ${isEven ? "md:left-0 md:right-auto" : ""}`}>
                                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`} />
                                        </div>

                                        <div className={`inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${item.bg} ${item.color} w-fit ${isEven ? "md:ml-auto" : ""}`}>
                                            {item.type} • {item.status}
                                        </div>

                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 font-medium mb-1">{item.organization}</p>
                                        <p className="text-sm text-gray-500 mb-4">{item.location}</p>

                                        {/* Highlights (Expandable) */}
                                        <motion.div
                                            initial={false}
                                            animate={{ height: expandedIndex === index ? "auto" : 0, opacity: expandedIndex === index ? 1 : 0 }}
                                            className="overflow-hidden"
                                        >
                                            <ul className={`space-y-2 mt-4 pt-4 border-t border-white/5 text-sm text-gray-300 ${isEven ? "md:text-right" : "md:text-left"}`}>
                                                {item.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="leading-relaxed">
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>

                                        {!expandedIndex && expandedIndex !== index && (
                                            <p className="text-xs text-gray-500 mt-2 italic md:hidden">Tap to see more...</p>
                                        )}
                                    </div>
                                </div>

                                {/* Empty Space for Timeline Balance */}
                                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
