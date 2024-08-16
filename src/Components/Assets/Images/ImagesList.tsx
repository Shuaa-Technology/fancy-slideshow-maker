import { useAppDispatch } from "../../../app/hooks";
import Image from "./Image/Image";
import styles from "./ImageList.module.scss";
import {
  addImage
} from "../../../app/slices/slidesSlice";

function ImageList() {
  const numberOfImages = 50; // You can change this to the number of images you want
  const imageData = Array.from({ length: numberOfImages }, (_, index) => ({
    id: index + 1,
    path: `https://picsum.photos/200/300?random=${index + 1}`,
    alt: `Image ${index + 1}`,
  }));

  const dispatch = useAppDispatch();

  const handleAddImage = (path: string) => {
    dispatch(addImage(path));
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
