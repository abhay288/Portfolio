"use client";

import { motion } from "framer-motion";
import { skills } from "@/app/data/portfolio";

const SkillCard = ({ title, items, delay }: { title: string, items: string[], delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="group relative h-full"
        >
            <div className="relative h-full glass p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] bg-black/20 flex flex-col">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <h3 className="text-2xl font-bold mb-6 text-gray-100 group-hover:text-cyan-400 transition-colors w-fit flex items-center gap-2">
                    {title}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                    {items.map((item, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: delay + (idx * 0.05) }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1.5 rounded-md bg-cyan-950/30 border border-cyan-500/20 text-sm font-mono text-cyan-100/80 hover:bg-cyan-500/20 hover:border-cyan-400/40 hover:text-cyan-50 transition-all cursor-default relative overflow-hidden"
                        >
                            {/* Scanline effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] hover:animate-[shimmer_1s_infinite]" />
                            {item}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-20 text-center"
                >
                    Technical <span className="text-gradient">Arsenal</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SkillCard title="Programming" items={skills.programming} delay={0.1} />
                    <SkillCard title="Frameworks" items={skills.frameworks} delay={0.15} />
                    <SkillCard title="AI & Data Science" items={skills.ai_ml} delay={0.2} />
                    <SkillCard title="Tools & Platforms" items={skills.tools} delay={0.25} />
                    <SkillCard title="Databases" items={skills.databases} delay={0.3} />
                    <SkillCard title="Soft Skills" items={skills.soft} delay={0.35} />
                </div>
            </div>
        </section>
    );
}
