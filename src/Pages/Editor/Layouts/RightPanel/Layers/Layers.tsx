// Components/Layers/Layers.tsx
import React, { useState } from "react";
import Layer from "./Layer";
import {LayerInterface , LayerType} from "../../../../../Core/Types/Layers";
import { useSelector } from "react-redux";
import { getSelectedElement, getSelectedSlide } from "../../../../../app/slices/slidesSlice";

const Layers: React.FC = () => {

    const selectedSlide = useSelector(getSelectedSlide);
    const selectedElement = useSelector(getSelectedElement);
    const elements = selectedSlide.getScene()!.getElements();



    const toggleVisibility = (id: string) => {
        const updateLayerVisibility = (layer: LayerInterface): LayerInterface => {
            if (layer.id === id) {
                return { ...layer, visible: !layer.visible };
            }
            if (layer.children) {
                return { ...layer, children: layer.children.map(updateLayerVisibility) };
            }
            return layer;
        };

        //setLayers(elements.map(updateLayerVisibility));
    };

    const handleToggleGroup = (id: string) => {
        // Optional: Add logic if you need to track group state globally
    };

    return (
        <div className="p-4 text-white">
            <div className="space-y-2" >
            {elements.map((element) => (
                <Layer
                key={element.id}
                element={element} // Pass element instead of layer
                onToggleVisibility={toggleVisibility}
                onToggleGroup={handleToggleGroup}
                />
            ))}
            </div>
        </div>
    );
};

export default Layers;