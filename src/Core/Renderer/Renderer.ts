import FancyRenderEngine from "./Engines/FancyRenderEngine/FancyRenderEngine";
import { RenderEngineInterface } from "./Engines/RenderEngineInterface";
import { RendererInterface } from "./RendererInterface";

class Renderer implements RendererInterface {
  id: string = "";
  version: number = 0;
  engine: RenderEngineInterface;

  constructor() {
    //todo: create engine depend on config
    this.engine = new FancyRenderEngine();
  }
}
export default Renderer;
