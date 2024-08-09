import FancyElement from "../FancyElements/FancyElement";
import { SceneInterface } from "./Scene/SceneInterface";

export interface SlideInterface {
    id: string;
    version: number;
    title: string;
    description: string;
    thumbnail?: string;
    scences: SceneInterface[]; 
}
