// Components/Layers/Layers.tsx
import React, { useState } from "react";
import { FaFont, FaSquare, FaImage, FaChevronRight, FaChevronDown } from "react-icons/fa";

const Layers: React.FC = () => {
    const [isGroupOpen, setIsGroupOpen] = useState(true);

    return (
        <div className="p-4 text-white">
            {/* Layer items */}
            <div className="space-y-2">
                {/* Top-level Text */}
                <div className="flex items-center gap-2">
                    <FaFont className="text-gray-400" size={16} />
                    <span>Fancy Slider</span>
                </div>

                {/* Group 1 (Collapsible) */}
                <div>
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => setIsGroupOpen(!isGroupOpen)}
                    >
                        {isGroupOpen ? (
                            <FaChevronDown className="text-gray-400" size={12} />
                        ) : (
                            <FaChevronRight className="text-gray-400" size={12} />
                        )}
                        <span className="text-gray-400">⋮⋮</span>
                        <span>Group 1</span>
                    </div>

                    {/* Nested Items (shown if group is open) */}
                    {isGroupOpen && (
                        <div className="ml-6 space-y-2 mt-2">
                            <div className="flex items-center gap-2">
                                <FaFont className="text-gray-400" size={16} />
                                <span>Fancy Slider</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaFont className="text-gray-400" size={16} />
                                <span>Not Just Slides A Fancy...</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaSquare className="text-blue-500" size={16} />
                                <span>Rectangle1</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaSquare className="text-yellow-500" size={16} />
                                <span>Rectangle2</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaImage className="text-gray-400" size={16} />
                                <span>flowers.png</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Layers;