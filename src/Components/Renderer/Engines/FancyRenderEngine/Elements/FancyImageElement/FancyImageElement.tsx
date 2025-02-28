import React, { useState } from "react";
import styles from "./FancyImageElement.module.css";

import FancySimpleImage from "../../../../../../Core/Models/FancyElements/FancySimpleImage/FancySimpleImage";
import FancyElement from "../../../../../../Core/Models/FancyElements/FancyElement";
import { Rnd } from "react-rnd";
import { FancyElementInterface } from "../../../../../../Core/Models/FancyElements/FancyElementInterface";

interface FancyImageProps<T extends FancyElement> {
  image: FancyElementInterface;
  onChangePosition: (element: FancyElementInterface, position: { x: number; y: number }) => void;
}

const FancyImageElement: React.FC<FancyImageProps<FancySimpleImage>> = ({ image, onChangePosition }) => {
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
      image = image.setPosition(data.x, data.y)
      console.log(data)
       onChangePosition(image, { x: data.x, y: data.y });
  };

  return (
    <Rnd
      key={image.id}
      id={image.id}
      position={position}
      onDrag={eventControl} // Track dragging status
      onDragStop={handleOnChangePosition} // Update state only when dragging stops
      onClick={(e:any) => {
        if (!isDragging) {
          e.stopPropagation();
        }
      }}
      lockAspectRatio={false}
      minWidth={50}
      minHeight={50}
      bounds=".dragContainer"
    >
      <img className={styles.FancyImageElement} src={image.path} alt="Fancy Element" />
    </Rnd>
  );
};

export default FancyImageElement;
