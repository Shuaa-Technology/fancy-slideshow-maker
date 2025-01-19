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

  const handleDragStop = (e: any, data: any) => {
    setPosition({
      x: data.x,
      y: data.y,
    });
  };

  return (
    <Rnd
      id={image.id}

      position={{ x: position.x, y: position.y }} // Use the state here for position
      onDragStop={handleDragStop} // Update state when drag is stopped
      className={styles.wrapper}
      lockAspectRatio={true}
      minWidth={50}
      minHeight={50}
    >
      <img className={styles.FancyImageElement} src={image.path} />
    </Rnd>
  );
}

export default FancyImageElement;
