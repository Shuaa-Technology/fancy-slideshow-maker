import {  FancyElementInterface } from "../FancyElements/FancyElementInterface";

export interface SlideInterface {
    id: string;
    version: number;
    title: string;
    description: string;
    thumbnail?: string;
    elements: FancyElementInterface[]; 
}
