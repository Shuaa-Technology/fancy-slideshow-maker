// Components/ModeSwitcher/ModeSwitcher.tsx
import React, { useState } from "react";
import { FaPalette, FaMagic, FaCube } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Mode {
    id: number;
    name: string;
    icon: React.ReactNode;
}

const modes: Mode[] = [
    { id: 1, name: "Design", icon: <FaPalette /> },
    { id: 2, name: "Prototype", icon: <FaMagic /> },
    // Add more modes as needed, e.g., { id: 3, name: "Layout", icon: <FaCube /> }
];

const ModeSwitcher: React.FC = () => {
    const [selectedMode, setSelectedMode] = useState<number>(modes[0].id);
    const [hoveredMode, setHoveredMode] = useState<number | null>(null);

    const handleModeToggle = (modeId: number) => {
        setSelectedMode(modeId);
        // Add logic for switching modes here if needed
    };

    return (
        <div className="flex gap-2 relative">
            {modes.map((mode) => (
                <div
                    key={mode.id}
                    className="relative"
                    onMouseEnter={() => setHoveredMode(mode.id)}
                    onMouseLeave={() => setHoveredMode(null)}
                >
                    <motion.div
                        className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
                            selectedMode === mode.id
                                ? "bg-indigo-600 text-white"
                                : "bg-black text-gray-400"
                        }`}
                        onClick={() => handleModeToggle(mode.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        {mode.icon}
                    </motion.div>

                    {/* Tooltip */}
                    <AnimatePresence>
                        {hoveredMode === mode.id && (
                            <motion.div
                                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap z-10"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                {mode.name}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default ModeSwitcher;