import FancyImageElement from "../../../../Components/Renderer/Engines/FancyRenderEngine/Elements/FancyImageElement/FancyImageElement";
import FancyElement from "../FancyElement";

class FancySimpleImage extends FancyElement {
  /* path: string; */
  constructor(
    id: string,
    name: string,
    thumbnail: string,
    description: string
   /*  ,path: string */
  ) {
    super(id, name, thumbnail, description);
    /* this.path = path; */
  }

  getComponent():string  {
    return "FancyImageElement";
  }
}

export default FancySimpleImage;
