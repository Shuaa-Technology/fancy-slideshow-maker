import React, { useState } from "react";
import styles from "./FancyRenderEngine.module.css";


interface RenderEngineProps {
    //for now 
    //@todo: will be a Core Model
    zoom: number;
  
}

function FancyRenderEngine({ zoom }: RenderEngineProps) {
  const [zoomLevel, setZoomLevel] = useState(80); // Initial zoom level, you can set it to any default value

  const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newZoomLevel = parseInt(event.target.value, 10);
    setZoomLevel(newZoomLevel);
  };

  const RendererInnerStyle = {
    transform: `scale(${zoom / 100})`, // Adjust the zoom level dynamically
};


  return (
    <div className={styles.FancyRenderEngine} style={RendererInnerStyle}></div>
  );
}

export default FancyRenderEngine;
