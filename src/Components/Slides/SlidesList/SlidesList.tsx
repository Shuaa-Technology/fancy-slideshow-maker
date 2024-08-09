import { useSelector } from 'react-redux';
import Slide from './Slide/Slide';

import styles from './SlidesList.module.css';
import {getSelectedSlide, getSlides} from "../../../app/slices/slidesSlice";

function SlidesList() {
    // Select slides from the Redux store
    const slides = useSelector(getSlides);
    const selectedSlide = useSelector(getSelectedSlide);

    return (
        <div className={styles.slidesList}>
            <div className={styles.slidesContainer}>
                {slides.map((slide, index) => (
                    <Slide key={slide.id}  slide={slide}  state={ { selected : (selectedSlide.id == slide.id) }}  />
                ))}
            </div>
        </div>
    );
}

export default SlidesList;
