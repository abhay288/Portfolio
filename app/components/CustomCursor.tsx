"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [section, setSection] = useState<string | null>(null);

    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the trailing cursor
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Interaction Check
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("interactive") ||
                window.getComputedStyle(target).cursor === "pointer"
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }

            // Section Detection
            const closestSection = target.closest("section");
            if (closestSection && closestSection.id) {
                setSection(closestSection.id);
            } else {
                setSection(null);
            }
        };

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    // Don't render on server or if not visible yet (prevents flash)
    if (typeof window === "undefined") return null;

    // Derived styles based on section
    const getCursorStyles = () => {
        const base = {
            width: "32px",
            height: "32px",
            borderColor: "rgba(147, 197, 253, 0.5)", // Default blueish
            backgroundColor: "transparent",
            mixBlendMode: "normal" as any,
            boxShadow: "none",
        };

        if (section === "hero") {
            return {
                ...base,
                boxShadow: "0 0 20px 2px rgba(147, 197, 253, 0.4)", // Increased glow
                borderColor: "rgba(147, 197, 253, 0.8)",
            };
        }
        if (section === "projects" || section === "author") {
            return {
                ...base,
                borderWidth: "2px",
                borderColor: "rgba(255, 255, 255, 0.8)", // Subtle highlight
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
            };
        }
        if (section === "achievements") { // Photography / Achievements
            return {
                ...base,
                borderColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.3), 0 0 10px rgba(147, 197, 253, 0.3)", // Camera lens glow
            };
        }

        return base;
    };

    const currentStyles = getCursorStyles();

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block" aria-hidden="true">
            {/* Primary Dot Cursor - Blue/White Gradient */}
            <motion.div
                className="absolute w-2.5 h-2.5 rounded-full"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "linear-gradient(135deg, #60a5fa, #ffffff)", // Blue to White
                }}
                animate={{
                    scale: isClicked ? 0.8 : isHovered ? 1.5 : 1,
                }}
                transition={{ duration: 0.1 }}
            />

            {/* Secondary Ring Cursor - Context Aware */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovered ? "48px" : currentStyles.width,
                    height: isHovered ? "48px" : currentStyles.height,
                    borderColor: isHovered ? "rgba(255, 255, 255, 0.8)" : currentStyles.borderColor,
                    backgroundColor: isHovered ? "rgba(255, 255, 255, 0.05)" : currentStyles.backgroundColor,
                    borderWidth: isHovered ? "2px" : (currentStyles as any).borderWidth || "1px",
                    boxShadow: isHovered ? "0 0 15px rgba(147, 197, 253, 0.3)" : currentStyles.boxShadow,
                    scale: isClicked ? 0.9 : 1,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            />
        </div>
    );
}
