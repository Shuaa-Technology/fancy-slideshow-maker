import { url } from "inspector";
import styles from "./Image.module.scss";

interface ImageProps {
  path: string;
}

function Image({ path }: ImageProps) {
  return (
    <div className={styles.imageItem} style={{ backgroundImage: "url(" + path + ")", backgroundSize: "cover",    backgroundPosition: "center" }}></div>
  );
}

export default Image;
