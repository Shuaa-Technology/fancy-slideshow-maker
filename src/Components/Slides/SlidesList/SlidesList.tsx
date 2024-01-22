import Slide from "./Slide/Slide";
import styles from "./SlidesList.module.css";

function SlidesList() {
    const numberOfSlides = 10;

    return (
        <div className={styles.slidesList}>
            <div className={styles.slidesContainer}>
                {Array.from({ length: numberOfSlides }, (_, index) => (
                    <Slide key={index} order={index + 1} />
                ))}
            </div>
        </div>
    );
}

export default SlidesList;
