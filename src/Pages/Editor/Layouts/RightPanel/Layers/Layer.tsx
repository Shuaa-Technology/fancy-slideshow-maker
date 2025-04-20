// Components/elements/element.tsx
import React, { useState } from "react";
import { FaFont, FaSquare, FaImage, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { FancyElementInterface } from "../../../../../Core/Models/FancyElements/FancyElementInterface";


export interface elementProps {
    element: FancyElementInterface;
    depth?: number;
    onToggleVisibility: (id: string) => void;
    onToggleGroup?: (id: string) => void;
}

const Layer: React.FC<elementProps> = ({ element, depth = 0, onToggleVisibility, onToggleGroup }) => {
    const [isGroupOpen, setIsGroupOpen] = useState(true);

    const handleToggleGroup = () => {
        setIsGroupOpen(!isGroupOpen);
        if (onToggleGroup) onToggleGroup(element.id);
    };

    // Determine the icon based on element type if not provided
    const getDefaultIcon = () => {
        switch (element.type) {
            case "TEXT":
                return FaFont;
            case "SHAPE":
                return FaSquare;
            case "IMAGE":
                return FaImage;
            default:
                return FaFont;
        }
    };

    const Icon = /* element.icon || */ getDefaultIcon();

    return (
        <div className="space-y-0.5">
            {/* element Item */}
            <div
                className="flex items-center gap-1.5 cursor-pointer flex-nowrap hover:bg-gray-800 rounded-sm py-1"
                style={{ paddingLeft: `${depth * 1.2}rem` }} // Subtle indentation
            >
                {/* Visibility Toggle */}
                <div onClick={() => onToggleVisibility(element.id)}>
                    {element.visibility == "visible" ? (
                        <FaEye className="text-gray-400" size={12} />
                    ) : (
                        <FaEyeSlash className="text-gray-400" size={12} />
                    )}
                </div>

                {/* Group Toggle (if applicable) */}
                {element.type === "GROUP" && (
                    <div className="flex items-center gap-0.5" onClick={handleToggleGroup}>
                        <motion.div
                            animate={{ rotate: isGroupOpen ? 0 : -90 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <FaChevronDown className="text-gray-400" size={10} />
                        </motion.div>
                        <span className="text-gray-400 text-xs">⋮⋮</span>
                    </div>
                )}

                {/* element Icon and Name */}
                <div className="flex items-center gap-1.5">
                    <Icon
                        className={`${
                            element.type ===  "SHAPE" && element.color ? "" : "text-gray-400"
                        }`}
                        size={14} // Smaller icon to match Figma
                        style={element.type ===  "SHAPE" && element.color ? { color: element.color } : {}}
                    />
                    <span
                        className={`text-xs ${element.visibility == "visible" ? "opacity-50" : ""} ${
                            element.type === "GROUP" ? "text-gray-400" : "text-white"
                        }`}
                        style={{ fontSize: "0.8rem" }} // Match Figma font size
                    >
            {element.name}
          </span>
                </div>
            </div>

            {/* Nested elements (for groups) */}
       {/*      <AnimatePresence>
                {element.type === "GROUP" && isGroupOpen && element.childrens && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="space-y-0.5"
                    >
                        {element.childrens.map((child:FancyElementInterface[]) => (
                            <Layer
                                key={child.id}
                                element={child}
                                depth={depth + 1}
                                onToggleVisibility={onToggleVisibility}
                                onToggleGroup={onToggleGroup}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence> */}
        </div>
    );
};

export default Layer;