import FancyImageElement from "../../../../Components/Renderer/Engines/FancyRenderEngine/Elements/FancyImageElement/FancyImageElement";
import FancyElement from "../FancyElement";
import { FancyElementInterface } from "../FancyElementInterface";

class FancyGroup extends FancyElement {
  type: string = "GROUP";
  childrens: FancyElementInterface[] = [];
  constructor(
    id: string,
    name: string,
    description: string,
    childrens: FancyElementInterface[]
  ) {
    super(id, name, description);
    this.childrens = childrens;
  }

  getComponent():string  {
    return "FancyGroupElement";
  }
}

export default FancyGroup;
