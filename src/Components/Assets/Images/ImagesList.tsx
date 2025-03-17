import { useAppDispatch } from "../../../app/hooks";
import Image from "./Image/Image";
import styles from "./ImageList.module.scss";
import {
  addViewportElement
} from "../../../app/slices/slidesSlice";
import { ElementFactory } from "../../../Core/Models/FancyElements/ElementFactory";

function ImageList() {
  const numberOfImages = 50; // You can change this to the number of images you want
  const imageData = Array.from({ length: numberOfImages }, (_, index) => ({
    id: index + 1,
    path: `https://picsum.photos/200/300?random=${index + 1}`,
    alt: `Image ${index + 1}`,
  }));

  const dispatch = useAppDispatch();

  const handleAddImage = (path: string) => {
     //add data here
    const elem = ElementFactory.createElement("image",{ url: path, name: "My Image" });
    dispatch(addViewportElement(elem));
  };



  return (
    <div className={styles.imagesList}>
      <div className={styles.imagesContainer}>
        {imageData.map((image) => (
          <Image key={image.id} path={image.path}   onImageClick={handleAddImage} />
        ))}
      </div>
    </div>
  );
}

export default ImageList;
