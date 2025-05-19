import { Visibility } from "../../types/ViewportInterface";
import { FancyElementInterface } from "./FancyElementInterface";

abstract class FancyElement implements FancyElementInterface {
  id: string;
  version: number = 0;
  type: string = "DEFAULT";
  name: string;
  description: string;
  thumbnail?: string;
  position = { x: 0, y: 0 };
  dimensions = {
    height: 0,
    width: 0,
  };

  visibility: Visibility = 'visible';
  color: string = "#fff";
  constructor(
    id: string,
    name: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  getPosition(): { x: number; y: number } {
    return this.position;
  }

  clone(): this {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  setPosition(x: number, y: number): FancyElementInterface {
    const newInstance = this.clone();
    newInstance.position = { x, y };
    return newInstance;
  }



  getDimensions(): { height: number; width: number } {
    return this.dimensions;
  }

  setDimensions(newDimensions: { height: number; width: number }) {
    this.dimensions = newDimensions;
  }

  setVisiblilty(visibility: Visibility): FancyElementInterface {
    const newInstance = this.clone();
    newInstance.visibility = visibility
    return newInstance;
  }

  abstract getComponent(): string
}

export default FancyElement;
