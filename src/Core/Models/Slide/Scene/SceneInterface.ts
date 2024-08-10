import FancyElement from "../../FancyElements/FancyElement";

export interface SceneInterface {
  id: string;
  elements: FancyElement[];



  getElements(): FancyElement[];
}
