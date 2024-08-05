import { RenderEngineInterface } from "./Engines/RenderEngineInterface";

export interface RendererInterface {
  id: string;
  version: number;
  engine: RenderEngineInterface;
}
