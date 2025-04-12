// Components/Layers/Layers.tsx
import React, { useState } from "react";
import Layer from "./Layer";
import {Layer as LayerT, LayerType} from "../../../../../Core/types/layers";

const Layers: React.FC = () => {
    // Sample dynamic JSON structure for layers
    const [layers, setLayers] = useState<LayerT[]>([
        {
            id: "1",
            name: "Fancy Slider",
            type: LayerType.Text,
            visible: true,
        },
        {
            id: "2",
            name: "Group 1",
            type: LayerType.Group,
            visible: true,
            children: [
                {
                    id: "2-1",
                    name: "Fancy Slider",
                    type: LayerType.Text,
                    visible: true,
                },
                {
                    id: "2-2",
                    name: "Not Just Slides A Fancy...",
                    type: LayerType.Text,
                    visible: true,
                },
                {
                    id: "2-3",
                    name: "Rectangle1",
                    type: LayerType.Shape,
                    visible: true,
                    color: "#3B82F6", // Blue
                },
                {
                    id: "2-4",
                    name: "Rectangle2",
                    type: LayerType.Shape,
                    visible: true,
                    color: "#FBBF24", // Yellow
                },
                {
                    id: "2-5",
                    name: "flowers.png",
                    type: LayerType.Image,
                    visible: true,
                },
            ],
        },
    ]);

    const toggleVisibility = (id: string) => {
        const updateLayerVisibility = (layer: LayerT): LayerT => {
            if (layer.id === id) {
                return { ...layer, visible: !layer.visible };
            }
            if (layer.children) {
                return { ...layer, children: layer.children.map(updateLayerVisibility) };
            }
            return layer;
        };

        setLayers(layers.map(updateLayerVisibility));
    };

    const handleToggleGroup = (id: string) => {
        // Optional: Add logic if you need to track group state globally
    };

    return (
        <div className="p-4 text-white">
            <div className="space-y-2">
                {layers.map((layer) => (
                    <Layer
                        key={layer.id}
                        layer={layer}
                        onToggleVisibility={toggleVisibility}
                        onToggleGroup={handleToggleGroup}
                    />
                ))}
            </div>
        </div>
    );
};

export default Layers;