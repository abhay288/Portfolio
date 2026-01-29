"use client";

import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";
import { useState } from "react";

export default function Resume() {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <section id="resume" className="py-24 px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="glass p-12 rounded-3xl border border-dashed border-gray-700 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-6" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Resume</h2>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                        My resume is ATS-optimized and details my experience in AI, Full-Stack Development, and GovTech.
                        Available for download or quick preview.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setShowPreview(!showPreview)}
                            className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                        >
                            <Eye className="w-5 h-5" />
                            Preview Resume
                        </button>
                        <a
                            href="/resume.pdf"
                            download
                            className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all flex items-center justify-center gap-2 text-white font-semibold shadow-lg shadow-purple-900/40"
                        >
                            <Download className="w-5 h-5" />
                            Download PDF
                        </a>
                    </div>

                    {showPreview && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mt-10 bg-white rounded-lg overflow-hidden h-[600px]"
                        >
                            <iframe
                                src="/resume.pdf"
                                className="w-full h-[600px]"
                                title="Resume Preview"
                            />
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
