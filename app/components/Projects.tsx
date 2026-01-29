import Image from "next/image"; // Added import

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/app/data/portfolio";
import { useState } from "react";
import { X, ExternalLink, Github } from "lucide-react";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

    return (
        <section id="projects" className="py-24 px-6 relative bg-black/40">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-20 text-center"
                >
                    Selected <span className="text-gradient">Projects</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedProject(project)}
                            className="glass p-8 rounded-3xl cursor-pointer group hover:bg-white/5 transition-colors relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-purple-500/50 transition-colors pointer-events-none w-16 h-16 flex items-center justify-center relative overflow-hidden">
                                        {/* Project Logo/Icon */}
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-contain p-1"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 rounded-md" />
                                        )}
                                    </div>
                                    <span className="text-xs font-mono text-gray-500 bg-black/30 px-2 py-1 rounded border border-gray-800">
                                        {project.tags[0]}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-xs text-gray-500">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0a0a0a] border border-gray-800 p-8 md:p-10 rounded-3xl max-w-2xl w-full relative shadow-2xl shadow-purple-900/20"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6 text-gray-400" />
                            </button>

                            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                {selectedProject.title}
                            </h3>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {selectedProject.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm border border-purple-500/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                {selectedProject.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href={selectedProject.link}
                                    className="flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </a>
                                <a
                                    href={selectedProject.github}
                                    className="flex items-center justify-center gap-2 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                    Source Code
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
