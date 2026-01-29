"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Image from "next/image"; // Added import

const navLinks = [
    { name: "Home", href: "#hero" }, // I'll add id="hero" to Hero
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Author", href: "#author" }, // Added Author previously
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"
                }`}
        >
            <div className={`max-w-5xl mx-auto px-6 ${isScrolled ? "bg-black/50 backdrop-blur-md border border-white/10 rounded-full shadow-lg" : ""
                } transition-all duration-300`}>
                <div className="flex items-center justify-between h-14">
                    <a href="#" className="relative group">
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            {/* Rotating Glow Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#a855f7_180deg,#ec4899_360deg)] opacity-80 group-hover:opacity-100 blur-[1px] transition-opacity"
                            />

                            {/* Inner Background (Black Mask) */}
                            <div className="absolute inset-[2px] bg-black rounded-full z-10" />

                            {/* Logo Text */}
                            <span className="relative z-20 text-lg font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                &lt;A/&gt;
                            </span>
                        </div>
                    </a>

                    <div className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button - Simplified for this context */}
                    <button className="md:hidden text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
