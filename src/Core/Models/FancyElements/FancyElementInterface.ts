
export interface FancyElementInterface {
  id: string;
  version: number;
  name: string;
  description: string;
  thumbnail?: string;
  path?: string 
  position: {
    x: number;
    y: number;
  };
  dimensions: {
    height: number;
    width: number;
  };

  getPosition(): { x: number; y: number };

  setPosition(x: number, y: number):FancyElementInterface;
}