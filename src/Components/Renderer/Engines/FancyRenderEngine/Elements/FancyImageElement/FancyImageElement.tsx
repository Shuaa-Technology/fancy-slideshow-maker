import React, { useState } from "react";
import styles from "./FancyImageElement.module.css";

import FancySimpleImage from "../../../../../../Core/Models/FancyElements/FancySimpleImage/FancySimpleImage";
import FancyElement from "../../../../../../Core/Models/FancyElements/FancyElement";
import { Rnd } from "react-rnd";

interface FancyImageProps<T extends FancyElement> {
  image: T;
}

function FancyImageElement({ image }: FancyImageProps<FancySimpleImage>) {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Initialize state for position
  const [isDragging, setIsDragging] = useState<any>(false);

  const handleDragStop = (e: any, data: any) => {
    setPosition({
      x: data.x,
      y: data.y,
    });
  };

  const eventControl = (event: { type: any; }, info: any) => {

    if (event.type === 'mousemove' || event.type === 'touchmove') {
      setIsDragging(true)
    }

    if (event.type === 'mouseup' || event.type === 'touchend') {
      setTimeout(() => {
        setIsDragging(false);
      }, 100);

    }
  }

  return (
    <Rnd
      id={image.id}

      position={{ x: position.x, y: position.y }} // Use the state here for position
      onDragStop={handleDragStop} // Update state when drag is stopped
      onClick={() => !isDragging }
      onDrag={eventControl}
      onStop={eventControl}
      className={styles.wrapper}
      lockAspectRatio={false}
      minWidth={50}
      minHeight={50}
    >
      <img className={styles.FancyImageElement} src={image.path} />
    </Rnd>
  );
}

export default FancyImageElement;
