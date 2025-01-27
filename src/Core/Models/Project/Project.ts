import { SlideInterface } from "../Slide/SlideInterface";
import { ProjectInterface } from "./ProjectInterface";


class Project implements ProjectInterface {
  id: string;
  version: number = 0;
  title: string;
  description: string;
  thumbnail: string;
  slides: SlideInterface[] = [];

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


  getSlide(): SlideInterface | null {
    return this.slides[0] ?? null; //will get the first as default scene
  }

  setSlide(slide: SlideInterface): this {
    this.slides[0] = slide;
    return this;
  }

  setSlides(slides: SlideInterface[]): this {
    this.slides = slides;

    return this;
  }


}

export default Project;
