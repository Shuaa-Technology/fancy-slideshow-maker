import React, { useState } from "react";
import styles from "./FancyImageElement.module.css";

import FancySimpleImage from "../../../../../../Core/Models/FancyElements/FancySimpleImage/FancySimpleImage";
import FancyElement from "../../../../../../Core/Models/FancyElements/FancyElement";
import { Rnd } from "react-rnd";
import { FancyElementInterface } from "../../../../../../Core/Models/FancyElements/FancyElementInterface";

interface FancyImageProps<T extends FancyElement> {
  image: FancyElementInterface;
  onChangePosition: (element: FancyElementInterface, position: any) => void;
}

function FancyImageElement({ image }: FancyImageProps<FancySimpleImage>) {
  const [position, setPosition] = useState({ x: image.position.x, y: image.position.y }); // Initialize state for position
  const [isDragging, setIsDragging] = useState<any>(false);


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

  const handleOnChangePosition = (position: any) => {
    setPosition({
      x: position.x,
      y: position.y,
    });
  };

  return (
    <Rnd
      id={image.id}

      position={{ x: position.x, y: position.y }} // Use the state here for position
      /*       onDragStop={handleDragStop}  */// Update state when drag is stopped
      onClick={() => !isDragging}
      onDrag={handleOnChangePosition}
      onDragStop={handleOnChangePosition}
      //  onStop={eventControl}
      className={styles.wrapper}
      lockAspectRatio={false}
      minWidth={50}
      minHeight={50}
      bounds=".dragContainer"
    >
      <img className={styles.FancyImageElement} src={image.path} />
    </Rnd>
  );
}

export default FancyImageElement;
