import { IconType } from "react-icons";

export enum LayerType {
    Text = "text",
    Shape = "shape",
    Image = "image",
    Group = "group",
}

export interface Layer {
    id: string;
    name: string;
    type: LayerType;
    visible: boolean;
    color?: string; // For shapes
    children?: Layer[]; // For nested layers (groups)
    icon?: IconType; // Custom icon for the layer
}

export interface LayerProps {
    layer: Layer;
    depth?: number;
    onToggleVisibility: (id: string) => void;
    onToggleGroup?: (id: string) => void;
}