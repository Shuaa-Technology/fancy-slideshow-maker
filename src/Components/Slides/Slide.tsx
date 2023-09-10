
import styles from "./Slide.module.css";

interface SlideProps {
    order: number;
}

function Slide({ order }: SlideProps) {
    return (
        <div className={styles.slideItemContainer}>
            <div className={styles.slideItem}>
                <div className={styles.slideContent}>Slide {order}</div>
            </div>
        </div>
    );
};

export default Slide;