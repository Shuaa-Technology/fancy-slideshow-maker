import FancyElement from "../FancyElements/FancyElement";
import { FancyElementInterface } from "../FancyElements/FancyElementInterface";
import { SceneInterface } from "./Scene/SceneInterface";
import { SlideInterface } from "./SlideInterface";

class Slide implements SlideInterface {
  id: string;
  version: number = 0;
  title: string;
  description: string;
  thumbnail: string;
  scences: SceneInterface[] = []; // Array of ElementInterface

  constructor(
    id: string,
    title: string,
    thumbnail: string,
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.description = description;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(newTitle: string): void {
    this.title = newTitle;
  }

  getThumbnail(): string {
    return this.thumbnail;
  }

  setThumbnail(newThumbnail: string): void {
    this.thumbnail = newThumbnail;
  }


  getScene(): SceneInterface | null {
    return this.scences[0] ?? null; //will get the first as default scene
  }

  setScene(scene: SceneInterface): this {
    this.scences[0] = scene;
    return this;
  }




  setScenes(scences: SceneInterface[]): this {
    this.scences = scences;

    return this;
  }

  clone(): Slide {
    const newSlide = new Slide(this.id, this.title, this.thumbnail, this.description);
    newSlide.setScenes(this.scences.map(scene => ({ ...scene }))); 
    return newSlide;
  }
}

export default Slide;
