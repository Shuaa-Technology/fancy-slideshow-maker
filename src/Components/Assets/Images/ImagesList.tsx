import Image from "./Image/Image";
import styles from "./ImageList.module.scss";

function ImageList() {
  const numberOfImages = 15; // You can change this to the number of images you want
  const imageData = Array.from({ length: numberOfImages }, (_, index) => ({
    id: index + 1,
    path: `https://picsum.photos/200/300?random=${index + 1}`,
    alt: `Image ${index + 1}`,
  }));

  return (
    <div className={styles.imagesList}>
      <div className={styles.imagesContainer}>
        {imageData.map((image) => (
          <Image key={image.id} path={image.path} />
        ))}
      </div>
    </div>
  );
}

export default ImageList;
