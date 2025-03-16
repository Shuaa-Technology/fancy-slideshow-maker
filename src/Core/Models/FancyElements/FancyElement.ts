import { FancyElementInterface } from "./FancyElementInterface";

abstract class FancyElement implements FancyElementInterface {
  id: string;
  version: number = 0;
  name: string;
  description: string;
  thumbnail: string;
  position = { x: 0, y: 0 }; // Default position
  dimensions = {
    height: 0,
    width: 0,
  };

  constructor(
    id: string,
    name: string,
    thumbnail: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
    this.description = description;
  }

   getPosition(): { x: number; y: number } {
    return this.position;
  }

  setPosition(x: number, y: number): this {
    const newImage = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    newImage.position = { x, y };
    return newImage;
  }

   getDimensions(): { height: number; width: number } {
    return this.dimensions;
  }

   setDimensions(newDimensions: { height: number; width: number }) {
    this.dimensions = newDimensions;
  }

  abstract getComponent():string
}

export default FancyElement;
