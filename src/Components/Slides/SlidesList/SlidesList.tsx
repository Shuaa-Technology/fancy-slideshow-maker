import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide/Slide";

import styles from "./SlidesList.module.css";
import {
  getSelectedSlide,
  getSlides,
  selectSlide,
} from "../../../app/slices/slidesSlice";
import { SlideInterface } from "../../../Core/Models/Slide/SlideInterface";
import { useAppDispatch } from "../../../app/hooks";

interface SlidesListProps {
  slides: SlideInterface[];
  selectedSlide: SlideInterface;
}

function SlidesList({ slides, selectedSlide }: SlidesListProps) {
  const dispatch = useAppDispatch();

  const handleSelectSlide = (slide: SlideInterface) => {
    dispatch(selectSlide(slide));
  };

  return (
    <div className={styles.slidesList}>
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <Slide
            key={slide.id}
            slide={slide}
            state={{ selected: selectedSlide.id == slide.id }}
            onSelectSlide={handleSelectSlide}
          />
        ))}
      </div>
    </div>
  );
}

export default SlidesList;
