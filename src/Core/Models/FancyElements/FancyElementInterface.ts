
export interface FancyElementInterface {
  id: string;
  version: number;
  name: string;
  description: string;
  thumbnail?: string;
  position: {
    x: number;
    y: number;
  };
  dimensions: {
    height: number;
    width: number;
  };


}