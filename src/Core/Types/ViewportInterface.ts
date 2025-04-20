export type Visibility = 'visible' | 'invisible' | 'ghost';

export interface ViewportInterface {
  visibility: Visibility;
  color: string; 
 // layer: number; 
  position: {
    x: number;
    y: number;
  };
  dimensions: {
    height: number;
    width: number;
  };
}

