import React, { useState } from "react";
import styles from "./FancyRenderEngine.module.css";
import { FancyElementInterface } from "../../../../Core/Models/FancyElements/FancyElementInterface";
import FancyImageElement from "./Elements/FancyImageElement/FancyImageElement";
import FancyElement from "../../../../Core/Models/FancyElements/FancyElement";

interface RenderEngineProps {
  //for now
  //@todo: will be a Core Model
  zoom: number;
  elements: FancyElement[];
}

function FancyRenderEngine({ zoom, elements = [] }: RenderEngineProps) {
  const [zoomLevel, setZoomLevel] = useState(80); // Initial zoom level, you can set it to any default value

  const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newZoomLevel = parseInt(event.target.value, 10);
    setZoomLevel(newZoomLevel);
  };


  const RendererInnerStyle = {
    transform: `scale(${zoom / 100})`, // Adjust the zoom level dynamically
  };

  
  return (
    <div className={styles.FancyRenderEngine} style={RendererInnerStyle}>
      {/* Map over the elements array and render each FancyElementComponent */}
      {elements.map((img) => (
        <FancyImageElement key={img.id}  image={img}/* element={element} */ />
      ))}
    </div>
  );
}

export default FancyRenderEngine;
