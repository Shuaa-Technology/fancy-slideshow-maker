import React, { useState } from "react";
import styles from "./FancyImageElement.module.css";

import FancySimpleImage from "../../../../../../Core/Models/FancyElements/FancySimpleImage/FancySimpleImage";
import FancyElement from "../../../../../../Core/Models/FancyElements/FancyElement";

interface FancyImageProps<T extends FancyElement> {
  image: T;
}

function FancyImageElement({ image }: FancyImageProps<FancySimpleImage>) {
  return <img className={styles.FancyImageElement} src={image.path}></img>;
}

export default FancyImageElement;
