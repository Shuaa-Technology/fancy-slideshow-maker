import { RenderEngineInterface } from "../RenderEngineInterface";

class FancyRenderEngine implements RenderEngineInterface {
  id: string = "";
  version: number = 0;
  title: string = "";
  description: string = "";

  getComponent(): string {
    return "FancyRenderEngine.ts";
  }
}

export default FancyRenderEngine;
