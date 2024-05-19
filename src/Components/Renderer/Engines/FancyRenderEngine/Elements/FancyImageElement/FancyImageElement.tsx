import React, { useState } from "react";
import styles from "./FancyImageElement.module.css";

import FancySimpleImage from "../../../../../../Core/Models/FancyElements/FancySimpleImage/FancySimpleImage";
import FancyElement from "../../../../../../Core/Models/FancyElements/FancyElement";

interface FancyImageProps {
/*   image: FancySimpleImage; */
  image: FancySimpleImage;
}

function FancyImageElement({ image }: FancyImageProps) {
  return <img className={styles.FancyImageElement} src={"https://source.unsplash.com/random/300×300?Cryptocurrency&"+image.id}></img>;
}

export default FancyImageElement;
