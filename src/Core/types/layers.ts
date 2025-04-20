import { IconType } from "react-icons";
import FancyElement from "../Models/FancyElements/FancyElement";
import { FancyElementInterface } from "../Models/FancyElements/FancyElementInterface";

export enum LayerType {
    Text = "text",
    Shape = "shape",
    Image = "image",
    Group = "group",
}

export interface LayerInterface {
    id: string;
    name: string;
    element?: FancyElementInterface | null
    type: LayerType;
    visible: boolean;
    color?: string; 
    children?: LayerInterface[]; // For nested layers (groups)
    icon?: IconType; // Custom icon for the layer
}




