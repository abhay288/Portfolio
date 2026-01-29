"use client";

import { motion } from "framer-motion";
import { about, education } from "@/app/data/portfolio";
import { Zap } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                >
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                            {about.description}
                        </p>

                        <div className="glass p-6 rounded-2xl border border-gray-800/50 mt-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-300">
                                <Zap className="w-5 h-5" /> Current Focus
                            </h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full" />
                                    Building Scalable AI Solutions
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full" />
                                    GovTech Innovation
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                    Full-Stack Architecture
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <div className="relative border-l border-gray-800 ml-3 md:ml-12 pl-8 space-y-12">
                        {about.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative"
                            >
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-black border-2 border-purple-500 rounded-full" />
                                <span className="text-sm text-purple-400 font-mono mb-2 block">{exp.year}</span>
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                <h4 className="text-lg text-gray-400 mb-3">{exp.company}</h4>
                                <p className="text-gray-500">{exp.description}</p>
                            </motion.div>
                        ))}

                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                                className="relative"
                            >
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-black border-2 border-pink-500 rounded-full" />
                                <span className="text-sm text-pink-400 font-mono mb-2 block">{edu.year}</span>
                                <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                                <h4 className="text-lg text-gray-400 mb-3">{edu.institution}</h4>
                                <p className="text-gray-500">Specializing in Artificial Intelligence & Machine Learning.</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
