import FancyElement from "../FancyElement";

class FancySimpleImage extends FancyElement {
  constructor(
    id: string,
    name: string,
    thumbnail: string,
    description: string
  ) {
    super(id, name, thumbnail, description);
  }
}

export default FancySimpleImage;
