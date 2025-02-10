import FancyElement from "../../FancyElements/FancyElement";
import { FancyElementInterface } from "../../FancyElements/FancyElementInterface";
import { SceneInterface } from "./SceneInterface";

class Scene implements SceneInterface {
  id: string;
  elements: FancyElementInterface[] = []; // Array of ElementInterface

  constructor(id: string) {
    this.id = id;
  }

  addElement(element: FancyElementInterface): this {
    this.elements.push(element);

    return this;
  }

  updateElement(updatedElement: FancyElementInterface): this {
    const index = this.elements.findIndex(element => element.id === updatedElement.id);
    if (index !== -1) {
      this.elements[index] = updatedElement;
    } else {
      console.warn(`Element with id ${updatedElement.id} not found.`);
    }

    return this;
  }
  getElements(): FancyElementInterface[] {
    return this.elements;
  }

  setElements(elements: FancyElementInterface[]): this {
    this.elements = elements;

    return this;
  }
}

export default Scene;
