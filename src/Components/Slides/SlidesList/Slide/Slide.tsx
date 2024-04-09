import styles from "./Slide.module.css";
import {SlideInterface} from "../../../../Core/models/slide/SlideInterface";

interface SlideProps {
    slide: SlideInterface;
}

function Slide({ slide }: SlideProps) {
    return (
        <div className={styles.slideItemContainer}>
            <div className={styles.slideItem}>
                <div className={styles.slideContent}>{slide.title}</div>
            </div>
        </div>
    );
};

export default Slide;
