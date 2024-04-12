import React, { useState } from 'react';
import styles from "./Renderer.module.css";
import FancyRenderEngine from './Engines/FancyRenderEngine/FancyRenderEngine';

function Renderer() {
    const [zoomLevel, setZoomLevel] = useState(80); // Initial zoom level, you can set it to any default value

    const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newZoomLevel = parseInt(event.target.value, 10);
        setZoomLevel(newZoomLevel);
    };



    return (
        <div className={styles.RendererContainer}>

             <FancyRenderEngine zoom={zoomLevel} />
            
            <div className={styles.RendererControls}>
                <div className={styles.RendererZoom}>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={zoomLevel}
                        onChange={handleZoomChange}
                        className={styles.CustomRange} // Add a custom class for styling
                    />
                    <span>{zoomLevel}%</span> {/* Display the current zoom level */}
                </div>
            </div>
        </div>
    );
}

export default Renderer;
