// RightPanel.tsx
import React, { useState } from "react";
import { FaLayerGroup, FaPalette } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Layers from "./Layers/Layers";

const RightPanel: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"Layers" | "Design">("Layers");

    return (
        <div className="p-2">
            <div className="w-64 h-screen bg-[#181A20] flex flex-col rounded-md">
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
                        <FaLayerGroup size={16}/>
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
                        <FaPalette size={16}/>
                        <span>Design</span>
                    </button>
                </div>

                {/* Tab Content */}
                <div className="flex-1 overflow-y-auto">
                    <AnimatePresence mode="wait">
                        {activeTab === "Layers" && (
                            <motion.div
                                key="layers"
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: 20}}
                                transition={{duration: 0.2}}
                            >
                                <Layers/>
                            </motion.div>
                        )}
                        {activeTab === "Design" && (
                            <motion.div
                                key="design"
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: 20}}
                                transition={{duration: 0.2}}
                                className="p-4 text-white"
                            >
                                Design Panel (Placeholder)
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>

    );
};

export default RightPanel;