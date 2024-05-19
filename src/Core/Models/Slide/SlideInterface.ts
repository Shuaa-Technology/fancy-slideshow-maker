import FancyElement from "../FancyElements/FancyElement";

export interface SlideInterface {
    id: string;
    version: number;
    title: string;
    description: string;
    thumbnail?: string;
    elements: FancyElement[]; 
}
