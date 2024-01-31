import { useSelector } from 'react-redux';
import Slide from './Slide/Slide';

import styles from './SlidesList.module.css';
import {selectSlides} from "../../../app/slices/slidesSlice";

function SlidesList() {
    // Select slides from the Redux store
    const slides = useSelector(selectSlides);

    return (
        <div className={styles.slidesList}>
            <div className={styles.slidesContainer}>
                {slides.map((slide, index) => (
                    <Slide key={slide.id}  slide={slide} />
                ))}
            </div>
        </div>
    );
}

export default SlidesList;
