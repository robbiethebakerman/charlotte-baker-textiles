import styles from "../styles/Slide.module.css";

export default function Slide({ imageData }) {
    const images = imageData.map((image, index, array) => {
        // const marginRight = index < array.length - 1 ? "1rem" : undefined;

        return (
            <img
                key={index}
                src={image.src}
                alt={image.alt}
                // style={{ marginRight: marginRight }}
            ></img>
        );
    });

    return <div className={styles.slide}>{images}</div>;
}
