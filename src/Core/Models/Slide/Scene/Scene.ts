import FancyElement from "../../FancyElements/FancyElement";
import { FancyElementInterface } from "../../FancyElements/FancyElementInterface";
import { SceneInterface } from "./SceneInterface";

class Scene implements SceneInterface {
  id: string;
  elements: FancyElement[] = []; // Array of ElementInterface

  constructor(id: string) {
    this.id = id;
  }

  addElement(element: FancyElement): this {
    this.elements.push(element);

    return this;
  }
}

export default Scene;
