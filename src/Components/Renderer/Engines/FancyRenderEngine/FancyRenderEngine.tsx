import React, { useState } from "react";
import styles from "./FancyRenderEngine.module.css";
import FancyImageElement from "./Elements/FancyImageElement/FancyImageElement";
import { FancyElementInterface } from "../../../../Core/Models/FancyElements/FancyElementInterface";
import { useAppDispatch } from "../../../../app/hooks";
import { updateViewportElement } from "../../../../app/slices/slidesSlice";

interface RenderEngineProps {
  zoom: number;
  elements: FancyElementInterface[];
}

function FancyRenderEngine({ zoom, elements = [] }: RenderEngineProps) {
  const dispatch = useAppDispatch();

  const handleNodePositionChanges = (element: FancyElementInterface, position: { x: number; y: number }) => {
    const updatedElement = element.setPosition(position.x, position.y);
    dispatch(updateViewportElement(updatedElement));
  };

  const rendererInnerStyle = {
    transform: `scale(${zoom / 100})`,
    transformOrigin: "top left", // Ensure scaling starts from top-left to avoid offset issues
    width: "100%",
    height: "100%",
  };

  return (
    <div className={`dragContainer ${styles.FancyRenderEngine}`} style={{ position: "relative" }}>
      <div style={rendererInnerStyle}>
        {elements.map((img) => (
          <FancyImageElement
            key={img.id}
            image={img}
            onChangePosition={handleNodePositionChanges}
          />
        ))}
      </div>
    </div>
  );
}

export default FancyRenderEngine;