import FancyElement from "../../FancyElements/FancyElement";

export interface SceneInterface {
  id: string;
  elements: FancyElement[];


  addElement(element: FancyElement): this;
  getElements(): FancyElement[];
}
