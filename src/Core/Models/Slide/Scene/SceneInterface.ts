import FancyElement from "../../FancyElements/FancyElement";
import { FancyElementInterface } from "../../FancyElements/FancyElementInterface";

export interface SceneInterface {
  id: string;
  elements: FancyElementInterface[];


  addElement(element: FancyElementInterface): this;
  updateElement(element: FancyElementInterface): this;
  getElements(): FancyElementInterface[];
}
