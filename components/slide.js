import styles from "../styles/Slide.module.css";

export default function Slide({ imageData }) {
    const images = imageData.map((image, index) => {
        return <img key={index} src={image.src} alt={image.alt}></img>;
    });

    return <div className={styles.slide}>{images}</div>;
}
