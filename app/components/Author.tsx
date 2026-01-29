"use client";

import { motion } from "framer-motion";
import { publication } from "@/app/data/portfolio";
import { ExternalLink, BookOpen, ShoppingCart, User, ShoppingBag, Globe } from "lucide-react";
import Image from "next/image";

export default function Author() {
    return (
        <section id="author" className="py-12 md:py-20 px-6 relative bg-gradient-to-b from-black to-purple-900/10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
                >
                    {/* 3D Book Mockup */}
                    <motion.div
                        className="relative w-48 h-72 md:w-64 md:h-[400px] flex-shrink-0 group perspective-1000"
                        whileHover={{ scale: 1.05, rotateY: -10 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative w-full h-full transform-style-3d transition-transform duration-500 group-hover:rotate-y-[-15deg] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            {/* Book Cover */}
                            <div className="absolute inset-0 rounded-r-xl overflow-hidden shadow-2xl border-l-[2px] border-white/10 bg-gray-900">
                                <Image
                                    src={publication.image}
                                    alt={publication.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Glossy Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Book Spine Effect (Side) */}
                            <div className="absolute top-0 bottom-0 left-0 w-3 bg-gray-800 -translate-x-full origin-right transform rotate-y-90 rounded-l-sm brightness-75" />
                        </div>

                        {/* Shadow */}
                        <div className="absolute -bottom-8 inset-x-4 h-6 bg-black/40 blur-lg rounded-[100%]" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 font-mono text-xs border border-purple-500/20">
                                    Published Author
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 font-mono text-xs border border-green-500/20">
                                    <Globe className="w-3 h-3" />
                                    Global Shipping
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                                {publication.title}
                            </h2>
                            <h3 className="text-lg md:text-xl text-gray-400 font-light mb-6">
                                {publication.subtitle}
                            </h3>

                            <div className="relative p-5 rounded-xl bg-white/5 border border-white/10 mb-6">
                                <BookOpen className="w-6 h-6 text-purple-500 mb-2 opacity-50 mx-auto md:mx-0" />
                                <blockquote className="text-lg italic text-gray-200 font-serif leading-relaxed">
                                    {publication.quote}
                                </blockquote>
                            </div>

                            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                                {publication.description}
                            </p>

                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                <a
                                    href={publication.links.kindle}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all shadow-lg hover:shadow-orange-500/25"
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                    Kindle
                                </a>
                                <a
                                    href={publication.links.paperback}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all shadow-lg"
                                >
                                    <BookOpen className="w-4 h-4" />
                                    Paperback
                                </a>
                                <a
                                    href={publication.links.pothi}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold transition-all shadow-lg hover:shadow-teal-500/25"
                                >
                                    <ShoppingBag className="w-4 h-4" />
                                    Pothi.com
                                </a>
                                <a
                                    href={publication.links.authorPage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-sm transition-all"
                                >
                                    <User className="w-4 h-4 text-gray-400" />
                                    Author Profile
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
