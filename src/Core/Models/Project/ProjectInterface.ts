import { SlideInterface } from "../Slide/SlideInterface";

export interface ProjectInterface {
  id: string;
  version: number;
  title: string;
  description: string;
  thumbnail?: string;
  slides: SlideInterface[];

  getSlide(): SlideInterface | null;
  setSlides(slides: SlideInterface[]): this
  setSlide(slide: SlideInterface): this;

}
