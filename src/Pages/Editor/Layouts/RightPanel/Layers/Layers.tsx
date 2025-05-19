// Components/Layers/Layers.tsx
import React, { useState } from "react";
import Layer from "./Layer";
import { LayerInterface, LayerType } from "../../../../../Core/types/layers";
import { useSelector } from "react-redux";
import { getSelectedElement, getSelectedSlide, updateViewportElement } from "../../../../../app/slices/slidesSlice";
import { FancyElementInterface } from "../../../../../Core/Models/FancyElements/FancyElementInterface";
import { useAppDispatch } from "../../../../../app/hooks";
import { Visibility } from "../../../../../Core/types/ViewportInterface";

const Layers: React.FC = () => {

    const selectedSlide = useSelector(getSelectedSlide);
    const selectedElement = useSelector(getSelectedElement);
    const elements = selectedSlide.getScene()!.getElements();
    const dispatch = useAppDispatch();


    const toggleVisibility = (element: FancyElementInterface) => {

        let visibility : Visibility = "visible"
        if (element.visibility == "visible") {
            visibility = "invisible"
        } else {
            visibility = "visible"
        }
        const updatedElement: FancyElementInterface = {
            ...element,
            visibility: visibility,
        };
        dispatch(updateViewportElement(updatedElement));
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