import { ViewportInterface, Visibility } from "../../types/ViewportInterface";

export interface FancyElementInterface extends ViewportInterface {
  id: string;
  version: number;
  type: string ;
  name: string;
  description?: string;
  thumbnail?: string;
  path?: string 
 


  getPosition(): { x: number; y: number };

  setPosition(x: number, y: number):FancyElementInterface;

  setVisiblilty(visibility: Visibility): FancyElementInterface;
  
}