import React, { useState } from 'react';
import styles from "./Renderer.module.css";
import FancyRenderEngine from './Engines/FancyRenderEngine/FancyRenderEngine';
import FancyElement from '../../Core/Models/FancyElements/FancyElement';
import FancySimpleImage from '../../Core/Models/FancyElements/FancySimpleImage/FancySimpleImage';

function Renderer() {
    const [zoomLevel, setZoomLevel] = useState(80); // Initial zoom level, you can set it to any default value

    const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newZoomLevel = parseInt(event.target.value, 10);
        setZoomLevel(newZoomLevel);
    };



    const generateDummyElements = (): FancyElement[] => {
        const dummyElements: FancyElement[] = [];
      
        // Create and push dummy elements into the array with positions and dimensions
        for (let i = 1; i <= 6; i++) {
          const element = new FancySimpleImage(
            i.toString(),
            `Element ${i}`,
            `thumbnail${i}.jpg`,
            `Description ${i}`,
             `https://picsum.photos/200/300?random=${i}` 
          );
      
          // Assign random positions and dimensions
          element.position = { x: Math.random() * 100, y: Math.random() * 100 };
          element.dimensions = { height: Math.random() * 200, width: Math.random() * 200 };
      
          dummyElements.push(element);
        }
      
        return dummyElements;
      };


    return (
        <div className={styles.RendererContainer}>

             <FancyRenderEngine zoom={zoomLevel} elements={generateDummyElements()} />
            
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
