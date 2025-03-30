// Components/ZoomSelector/ZoomSelector.tsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const zoomOptions = [
    { label: "25%", value: 25 },
    { label: "50%", value: 50 },
    { label: "75%", value: 75 },
    { label: "100%", value: 100 },
    { label: "150%", value: 150 },
    { label: "200%", value: 200 },
    { label: "Fit", value: "fit" },
    { label: "Full", value: "full" },
];

const ZoomSelector: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedZoom, setSelectedZoom] = useState<number | string>(100); // Default to 100%

    const handleSelect = (value: number | string) => {
        setSelectedZoom(value);
        setIsOpen(false);
        console.log(`Zoom set to: ${value}`);
    };

    return (
        <div className="relative inline-block">
            <button
                className="rounded-md px-3 py-1 text-white text-sm flex items-center gap-2  focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {typeof selectedZoom === "number" ? `${selectedZoom}%` : selectedZoom}
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {isOpen ? (
                        <FaChevronUp className="text-indigo-600" size={10} />
                    ) : (
                        <FaChevronDown className="text-indigo-600" size={10} />
                    )}
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute top-full left-0 mt-1 bg-[#0F1115] rounded-md shadow-lg min-w-[100px] z-10 text-white"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {zoomOptions.map((option) => (
                            <div
                                key={option.value}
                                className={`px-3 py-1 cursor-pointer hover:bg-indigo-800 ${
                                    selectedZoom === option.value ? "bg-indigo-600 font-bold" : ""
                                }`}
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ZoomSelector;