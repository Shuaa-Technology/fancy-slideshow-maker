// Components/Layers/Layer.tsx
import React, { useState } from "react";
import { FaFont, FaSquare, FaImage, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { LayerProps, LayerType } from "../../../../../Core/types/layers";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

const Layer: React.FC<LayerProps> = ({ layer, depth = 0, onToggleVisibility, onToggleGroup }) => {
    const [isGroupOpen, setIsGroupOpen] = useState(true);

    const handleToggleGroup = () => {
        setIsGroupOpen(!isGroupOpen);
        if (onToggleGroup) onToggleGroup(layer.id);
    };

    // Determine the icon based on layer type if not provided
    const getDefaultIcon = () => {
        switch (layer.type) {
            case LayerType.Text:
                return FaFont;
            case LayerType.Shape:
                return FaSquare;
            case LayerType.Image:
                return FaImage;
            default:
                return FaFont;
        }
    };

    const Icon = layer.icon || getDefaultIcon();

    return (
        <div className="space-y-0.5">
            {/* Layer Item */}
            <div
                className="flex items-center gap-1.5 cursor-pointer flex-nowrap hover:bg-gray-800 rounded-sm py-1"
                style={{ paddingLeft: `${depth * 1.2}rem` }} // Subtle indentation
            >
                {/* Visibility Toggle */}
                <div onClick={() => onToggleVisibility(layer.id)}>
                    {layer.visible ? (
                        <FaEye className="text-gray-400" size={12} />
                    ) : (
                        <FaEyeSlash className="text-gray-400" size={12} />
                    )}
                </div>

                {/* Group Toggle (if applicable) */}
                {layer.type === LayerType.Group && (
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

                {/* Layer Icon and Name */}
                <div className="flex items-center gap-1.5">
                    <Icon
                        className={`${
                            layer.type === LayerType.Shape && layer.color ? "" : "text-gray-400"
                        }`}
                        size={14} // Smaller icon to match Figma
                        style={layer.type === LayerType.Shape && layer.color ? { color: layer.color } : {}}
                    />
                    <span
                        className={`text-xs ${!layer.visible ? "opacity-50" : ""} ${
                            layer.type === LayerType.Group ? "text-gray-400" : "text-white"
                        }`}
                        style={{ fontSize: "0.8rem" }} // Match Figma font size
                    >
            {layer.name}
          </span>
                </div>
            </div>

            {/* Nested Layers (for groups) */}
            <AnimatePresence>
                {layer.type === LayerType.Group && isGroupOpen && layer.children && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="space-y-0.5"
                    >
                        {layer.children.map((child) => (
                            <Layer
                                key={child.id}
                                layer={child}
                                depth={depth + 1}
                                onToggleVisibility={onToggleVisibility}
                                onToggleGroup={onToggleGroup}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Layer;