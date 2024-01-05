import React, { useState } from 'react';
import styles from "./SlideViewer.module.css";

function SlideViewer() {
    const [zoomLevel, setZoomLevel] = useState(80); // Initial zoom level, you can set it to any default value

    const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newZoomLevel = parseInt(event.target.value, 10);
        setZoomLevel(newZoomLevel);
    };

    const slideViewerInnerStyle = {
        transform: `scale(${zoomLevel / 100})`, // Adjust the zoom level dynamically
    };

    return (
        <div className={styles.SlideViewerContainer}>
            <div className={styles.SlideViewerInner} style={slideViewerInnerStyle}></div>
            <div className={styles.SlideViewerControls}>
                <div className={styles.SlideViewerZoom}>
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

export default SlideViewer;
