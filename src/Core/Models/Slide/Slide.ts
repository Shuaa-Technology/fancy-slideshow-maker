import {  FancyElementInterface } from "../FancyElements/FancyElementInterface";
import {SlideInterface} from "./SlideInterface";

class Slide implements SlideInterface {
    id: string;
    version: number = 0;
    title: string;
    description: string;
    thumbnail: string;
    elements: FancyElementInterface[] = []; // Array of ElementInterface
    
    constructor(id: string, title: string, thumbnail: string,description: string) {
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
}

export default Slide;
