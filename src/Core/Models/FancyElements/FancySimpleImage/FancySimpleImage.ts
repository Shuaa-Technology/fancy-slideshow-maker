import FancyImageElement from "../../../../Components/Renderer/Engines/FancyRenderEngine/Elements/FancyImageElement/FancyImageElement";
import FancyElement from "../FancyElement";

class FancySimpleImage extends FancyElement {
  path?: string = ""; 
  type: string = "IMAGE";
  constructor(
    id: string,
    name: string,
    description: string,
    path: string 
  ) {
    super(id, name, description);
    this.path = path;
  }

  getComponent():string  {
    return "FancyImageElement";
  }
}

export default FancySimpleImage;
