import { url } from "inspector";
import styles from "./Image.module.scss";

interface ImageProps {
  path: string;
  onImageClick: (path: string) => void;
}

function Image({ path, onImageClick}: ImageProps) {

  const handleOnClick = () => {
    onImageClick(path);
  };

  return (
    <div onClick={handleOnClick}  className={styles.imageItem} style={{ backgroundImage: "url(" + path + ")", backgroundSize: "cover",    backgroundPosition: "center" }}></div>
  );
}

export default Image;
