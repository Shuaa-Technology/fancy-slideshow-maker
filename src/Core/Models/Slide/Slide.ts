import {SlideInterface} from "./SlideInterface";

class Slide implements SlideInterface {
    id: string;
    title: string;
    thumbnail: string;
    version: number;
    description: string;

    constructor(id: string, title: string, thumbnail: string, version: number, description: string) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.version = version;
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
