import { FancyElementInterface } from "./FancyElementInterface";
import FancySimpleImage from "./FancySimpleImage/FancySimpleImage";

// Define element types
export type ElementType = 'image' | 'text' | 'shape';

// Define flexible data structure
export interface ElementData {
  [key: string]: any;
  url?: string;
  content?: string;
  shapeType?: string;
  name?: string;
  thumbnail?: string;
  description?: string;
  position?: { x: number; y: number };
}

/**
 * Element Factory to create different types of FancyElements
 */
export class ElementFactory {
  /**
   * Creates a new element based on type and data
   * @param type The type of element to create
   * @param data The data to populate the element
   * @returns A new FancyElementInterface instance
   * @throws Error if type is unknown or required data is missing
   */
  static createElement(type: ElementType, data: ElementData = {}): FancyElementInterface {
    let element: FancyElementInterface;

    switch (type) {
      case 'image':
        if (!data.url) {
          throw new Error('Image element requires a url');
        }
        element = new FancySimpleImage(
          crypto.randomUUID(),
          data.name || "Element",
          data.description || "Description",
          data.url
        );
        break;


      default:
        throw new Error(`Unknown element type: ${type}`);
    }

    // Apply position if provided, otherwise leave unset (reducer can handle default)
    if (data.position) {
      element.position = data.position;
    }

    return element;
  }
}

// Optional: Export a singleton instance if you prefer instance-based usage
export const elementFactory = ElementFactory;