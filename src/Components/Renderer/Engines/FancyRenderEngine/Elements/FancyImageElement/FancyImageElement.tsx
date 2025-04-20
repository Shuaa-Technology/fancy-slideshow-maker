import React, { useState } from "react";
import styles from "./FancyImageElement.module.css";

import FancySimpleImage from "../../../../../../Core/Models/FancyElements/FancySimpleImage/FancySimpleImage";
import FancyElement from "../../../../../../Core/Models/FancyElements/FancyElement";
import { Rnd } from "react-rnd";
import { FancyElementInterface } from "../../../../../../Core/Models/FancyElements/FancyElementInterface";

interface FancyImageProps<T extends FancyElement> {
  image: FancyElementInterface;
  selected: boolean;
  onSelect: (element: FancyElementInterface) => void;
  onChangePosition: (element: FancyElementInterface, position: { x: number; y: number }) => void;

}

const FancyImageElement: React.FC<FancyImageProps<FancySimpleImage>> = ({ image, onChangePosition,onSelect,selected =false }) => {
  const [position, setPosition] = useState({ x: image.position.x, y: image.position.y });
  const [isDragging, setIsDragging] = useState(false);
   
  // Detects dragging events
  const eventControl = (event: { type: string }) => {
    if (event.type === "mousemove" || event.type === "touchmove") {
      setIsDragging(true);
    }

    if (event.type === "mouseup" || event.type === "touchend") {
      setTimeout(() => {
        setIsDragging(false);
      }, 50);
    }
  };

  // Updates position only on drag stop
  const handleOnChangePosition = (e: any, data: { x: number; y: number }) => {
      setPosition({ x: data.x, y: data.y });
      const updatedImage: FancyElementInterface = {
        ...image,
        position: { x: data.x, y: data.y },
      };
      onChangePosition(updatedImage, { x: data.x, y: data.y });
  };



  return (
    <Rnd
      key={image.id}
      id={image.id}
      position={position}
      onDrag={eventControl}
      onDragStop={handleOnChangePosition} 
    
      onClick={(e: any) => {
          e.stopPropagation();
          console.log("image")
          onSelect(image); 
       
      }}
      lockAspectRatio={false}
      minWidth={50}
      minHeight={50}
      bounds=".dragContainer"
      
    >
      <img  className={`${styles.FancyImageElement} ${selected ? styles.selected : ""}`} src={image.path} alt="Fancy Element" />
    </Rnd>
  );
};

export default FancyImageElement;
