import { FancyElementInterface } from "./FancyElementInterface";

class FancyElement implements FancyElementInterface {
  id: string;
  version: number = 0;
  name: string;
  description: string;
  thumbnail: string;

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
}

export default FancyElement;
