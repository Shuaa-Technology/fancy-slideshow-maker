import styles from "./Slide.module.css";
import { SlideInterface } from "../../../../Core/Models/Slide/SlideInterface";

interface SlideProps {
  slide: SlideInterface;
  state: { selected: boolean };
  onSelectSlide: (slide: SlideInterface) => void;
}

function Slide({ slide, state, onSelectSlide }: SlideProps) {
  const handleOnClick = () => {
    onSelectSlide(slide);
  };
  return (
    <div className={styles.slideItemContainer} onClick={handleOnClick}>
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
