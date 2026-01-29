"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const TechIcon = ({ name, color, path, imgSrc }: { name: string; color: string; path?: string; imgSrc?: string }) => (
    <motion.div
        className="relative group cursor-pointer"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
    >
        <div className={`absolute -inset-2 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 ${color}`} />
        <div className="relative w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-2.5 backdrop-blur-sm group-hover:border-white/30 transition-colors overflow-hidden">
            {imgSrc ? (
                <div className="relative w-full h-full">
                    <Image src={imgSrc} alt={name} fill className="object-contain" />
                </div>
            ) : (
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-gray-300 group-hover:text-white transition-colors" style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.2))" }}>
                    <path d={path} />
                </svg>
            )}
        </div>

        {/* Tooltip */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-[10px] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
            {name}
        </div>
    </motion.div>
);

const TypingEffect = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const targetText = text;
        setDisplayedText(""); // Reset

        const intervalId = setInterval(() => {
            setDisplayedText(targetText.slice(0, i + 1));
            i++;
            if (i > targetText.length) {
                clearInterval(intervalId);
            }
        }, 50);

        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <div className="font-mono text-lg md:text-xl text-purple-300 bg-purple-900/10 border border-purple-500/20 p-4 rounded-lg inline-block backdrop-blur-sm">
            <span className="mr-2 text-purple-500">&gt;</span>
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2.5 h-5 bg-purple-500 ml-1 align-middle"
            />
        </div>
    );
};

const LetterReveal = ({ text, delayOffset = 0 }: { text: string, delayOffset?: number }) => (
    <div className="flex overflow-hidden">
        {text.split("").map((char, i) => (
            <motion.span
                key={i}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: delayOffset + i * 0.05, ease: [0.215, 0.61, 0.355, 1] }}
                className="inline-block"
            >
                {char === " " ? "\u00A0" : char}
            </motion.span>
        ))}
    </div>
);

export default function Hero() {
    // Parallax Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24 md:py-0"
        >
            {/* Background Atmosphere */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.1),transparent_50%)]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

                {/* LEFT: Text Content */}
                <div className="space-y-8 z-10 order-2 md:order-1">
                    <div>
                        <motion.h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-4">
                            <div className="text-white">
                                <LetterReveal text="ABHAY" />
                            </div>
                            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                <LetterReveal text="KUSHWAHA" delayOffset={0.3} />
                            </div>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="space-y-4"
                        >
                            <h2 className="text-xl md:text-2xl text-gray-400 font-light max-w-lg">
                                Full Stack Developer & AI/ML Enthusiast from <span className="text-white font-medium">Kanpur, India</span>.
                                Building innovative solutions that make a real-world impact.
                            </h2>

                            <div className="pt-2">
                                <TypingEffect text="I build AI-powered full-stack applications" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Tech Stack Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="space-y-4"
                    >
                        <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-gray-700" />
                            Powering My Work
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {/* React */}
                            <TechIcon
                                name="React"
                                color="bg-cyan-400"
                                imgSrc="/logos/react-icon.png"
                            />
                            {/* TypeScript */}
                            <TechIcon
                                name="TypeScript"
                                color="bg-blue-600"
                                imgSrc="/logos/typescript-icon.png"
                            />
                            {/* JavaScript */}
                            <TechIcon
                                name="JavaScript"
                                color="bg-yellow-300"
                                imgSrc="/logos/javascript-icon.png"
                            />
                            {/* Python */}
                            <TechIcon
                                name="Python"
                                color="bg-yellow-400"
                                imgSrc="/logos/python-icon.jpg"
                            />
                            {/* FastAPI */}
                            <TechIcon
                                name="FastAPI"
                                color="bg-teal-500"
                                imgSrc="/logos/fastapi-icon.png"
                            />
                            {/* PostgreSQL */}
                            <TechIcon
                                name="PostgreSQL"
                                color="bg-blue-400"
                                imgSrc="/logos/postgresql-icon.png"
                            />
                            {/* Canva */}
                            <TechIcon
                                name="Canva"
                                color="bg-cyan-500"
                                imgSrc="/logos/canva-icon.png"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT: 3D Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10 flex justify-center order-1 md:order-2 perspective-1000"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                        }}
                        className="relative w-72 h-72 md:w-96 md:h-96"
                    >
                        {/* 3D Glow Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-purple-500/30 border-dashed"
                            style={{ transform: "translateZ(-50px)" }}
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 rounded-full border border-pink-500/30 border-dotted"
                            style={{ transform: "translateZ(-30px)" }}
                        />

                        {/* Orbiting Particles */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full"
                            >
                                <div
                                    className="w-3 h-3 bg-white rounded-full absolute -top-1.5 left-1/2 blur-[1px] shadow-[0_0_10px_white]"
                                    style={{ transform: `translateX(${i * 20}px)` }}
                                />
                            </motion.div>
                        ))}

                        {/* Main Image */}
                        <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl backdrop-blur-sm bg-black/50" style={{ transform: "translateZ(50px)" }}>
                            <Image
                                src="/profile.jpg"
                                alt="Abhay Kushwaha"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            {/* Glare effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Floor Reflection/Shadow */}
                    <div className="absolute -bottom-12 w-2/3 h-10 bg-black/50 blur-xl rounded-[100%]" />
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown className="w-6 h-6 text-gray-400" />
            </motion.div>
        </section>
    );
}
