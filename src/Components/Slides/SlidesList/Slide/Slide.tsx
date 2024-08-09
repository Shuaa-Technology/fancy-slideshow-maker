import styles from "./Slide.module.css";
import { SlideInterface } from "../../../../Core/Models/Slide/SlideInterface";

interface SlideProps {
  slide: SlideInterface;
  state: { selected: boolean };
}

function Slide({ slide, state }: SlideProps) {
  return (
    <div className={styles.slideItemContainer}>
      <div
        className={
          styles.slideItem + "  " + (state.selected ? styles.selected : "")
        }
      >
        <div className={styles.slideContent}>{slide.title}</div>
      </div>
    </div>
  );
}

export default Slide;
