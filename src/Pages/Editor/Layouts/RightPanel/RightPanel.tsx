// RightPanel.tsx
import React, { useState } from "react";
import { FaLayerGroup, FaPalette, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Layers from "./Layers/Layers";
import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaAlignLeft,
    FaAlignCenter,
    FaAlignRight,
    FaAlignJustify,
    FaPaintBrush,
    FaArrowUp,
    FaArrowDown,
    FaArrowLeft,
    FaArrowRight,
    FaArrowsAltH,
    FaArrowsAltV,
    FaLock,
} from "react-icons/fa";

const RightPanel: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"Layers" | "Design">("Layers");
    const [openSections, setOpenSections] = useState({
        alignToPage: true,
        typography: true,
        advanced: true,
    });

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className="p-2 w-[300px]">
            <div className="w-full h-screen bg-[#181A20] flex flex-col rounded-md">
                {/* Tabs */}
                <div className="flex border-b border-gray-700">
                    <button
                        className={`flex-1 py-2 flex items-center justify-center gap-2 text-sm ${
                            activeTab === "Layers"
                                ? "text-indigo-600 border-b-2 border-indigo-600"
                                : "text-gray-400 hover:text-gray-200"
                        }`}
                        onClick={() => setActiveTab("Layers")}
                    >
                        <FaLayerGroup size={16} />
                        <span>Layers</span>
                    </button>
                    <button
                        className={`flex-1 py-2 flex items-center justify-center gap-2 text-sm ${
                            activeTab === "Design"
                                ? "text-indigo-600 border-b-2 border-indigo-600"
                                : "text-gray-400 hover:text-gray-200"
                        }`}
                        onClick={() => setActiveTab("Design")}
                    >
                        <FaPalette size={16} />
                        <span>Design</span>
                    </button>
                </div>

                {/* Tab Content */}
                <div className="flex-1 overflow-y-auto">
                    <AnimatePresence mode="wait">
                        {activeTab === "Layers" && (
                            <motion.div
                                key="layers"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Layers />
                            </motion.div>
                        )}
                        {activeTab === "Design" && (
                            <motion.div
                                key="design"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.2 }}
                                className="p-4 text-white"
                            >
                                {/* Align to Page Section */}
                                <div className="mb-4">
                                    <div
                                        className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white"
                                        onClick={() => toggleSection("alignToPage")}
                                    >
                                        {openSections.alignToPage ? (
                                            <FaChevronDown size={12} />
                                        ) : (
                                            <FaChevronRight size={12} />
                                        )}
                                        <span className="text-sm font-medium">Align to Page</span>
                                    </div>
                                    <AnimatePresence>
                                        {openSections.alignToPage && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="mt-2"
                                            >
                                                <div className="grid grid-cols-3 gap-2">
                                                    <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                        <FaArrowUp size={14} className="text-gray-300" />
                                                    </button>
                                                    <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                        <FaArrowsAltV size={14} className="text-gray-300" />
                                                    </button>
                                                    <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                        <FaArrowDown size={14} className="text-gray-300" />
                                                    </button>
                                                    <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                        <FaArrowLeft size={14} className="text-gray-300" />
                                                    </button>
                                                    <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                        <FaArrowsAltH size={14} className="text-gray-300" />
                                                    </button>
                                                    <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                        <FaArrowRight size={14} className="text-gray-300" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Typography Section */}
                                <div className="mb-4">
                                    <div
                                        className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white"
                                        onClick={() => toggleSection("typography")}
                                    >
                                        {openSections.typography ? (
                                            <FaChevronDown size={12} />
                                        ) : (
                                            <FaChevronRight size={12} />
                                        )}
                                        <span className="text-sm font-medium">Typography</span>
                                    </div>
                                    <AnimatePresence>
                                        {openSections.typography && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="mt-2 space-y-3"
                                            >
                                                {/* Font Family */}
                                                <div>
                                                    <label className="text-xs text-gray-400">Font Family</label>
                                                    <select
                                                        className="w-full mt-1 p-1.5 bg-[#2A2D35] text-white text-sm rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                        defaultValue="Montserrat Light"
                                                    >
                                                        <option>Montserrat Light</option>
                                                        <option>Roboto</option>
                                                        <option>Inter</option>
                                                        <option>Poppins</option>
                                                    </select>
                                                </div>

                                                {/* Font Size */}
                                                <div>
                                                    <label className="text-xs text-gray-400">Font Size</label>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <input
                                                            type="number"
                                                            defaultValue={24}
                                                            className="w-16 p-1.5 bg-[#2A2D35] text-white text-sm rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                        />
                                                        <span className="text-xs text-gray-400">px</span>
                                                    </div>
                                                </div>

                                                {/* Text Formatting */}
                                                <div className="flex gap-2">
                                                    <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                        <FaBold size={14} className="text-gray-300" />
                                                    </button>
                                                    <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                        <FaItalic size={14} className="text-gray-300" />
                                                    </button>
                                                    <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                        <FaUnderline size={14} className="text-gray-300" />
                                                    </button>
                                                    <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                        <FaPaintBrush size={14} className="text-gray-300" />
                                                    </button>
                                                </div>

                                                {/* Alignment (Moved Here) */}
                                                <div>
                                                    <label className="text-xs text-gray-400">Alignment</label>
                                                    <div className="flex gap-2 mt-1">
                                                        <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                            <FaAlignLeft size={14} className="text-gray-300" />
                                                        </button>
                                                        <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                            <FaAlignCenter size={14} className="text-gray-300" />
                                                        </button>
                                                        <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                            <FaAlignRight size={14} className="text-gray-300" />
                                                        </button>
                                                        <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                            <FaAlignJustify size={14} className="text-gray-300" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Advanced Section */}
                                <div className="mb-4">
                                    <div
                                        className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white"
                                        onClick={() => toggleSection("advanced")}
                                    >
                                        {openSections.advanced ? (
                                            <FaChevronDown size={12} />
                                        ) : (
                                            <FaChevronRight size={12} />
                                        )}
                                        <span className="text-sm font-medium">Advanced</span>
                                    </div>
                                    <AnimatePresence>
                                        {openSections.advanced && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="mt-2 space-y-3"
                                            >
                                                {/* Width, Height, Ratio */}
                                                <div className="flex gap-2">
                                                    <div className="flex-1">
                                                        <label className="text-xs text-gray-400">Width</label>
                                                        <div className="flex items-center gap-1 mt-1">
                                                            <input
                                                                type="text"
                                                                defaultValue="363.2 px"
                                                                className="w-full p-1.5 bg-[#2A2D35] text-white text-sm rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <label className="text-xs text-gray-400">Height</label>
                                                        <div className="flex items-center gap-1 mt-1">
                                                            <input
                                                                type="text"
                                                                defaultValue="59.8 px"
                                                                className="w-full p-1.5 bg-[#2A2D35] text-white text-sm rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center mt-5">
                                                        <button className="p-1.5 bg-[#2A2D35] rounded hover:bg-gray-600">
                                                            <FaLock size={14} className="text-gray-300" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* X, Y, Rotate */}
                                                <div className="flex gap-2">
                                                    <div className="flex-1">
                                                        <label className="text-xs text-gray-400">X</label>
                                                        <div className="flex items-center gap-1 mt-1">
                                                            <input
                                                                type="text"
                                                                defaultValue="184 px"
                                                                className="w-full p-1.5 bg-[#2A2D35] text-white text-sm rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <label className="text-xs text-gray-400">Y</label>
                                                        <div className="flex items-center gap-1 mt-1">
                                                            <input
                                                                type="text"
                                                                defaultValue="336.7 px"
                                                                className="w-full p-1.5 bg-[#2A2D35] text-white text-sm rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <label className="text-xs text-gray-400">Rotate</label>
                                                        <div className="flex items-center gap-1 mt-1">
                                                            <input
                                                                type="text"
                                                                defaultValue="0°"
                                                                className="w-full p-1.5 bg-[#2A2D35] text-white text-sm rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default RightPanel;