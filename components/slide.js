import styles from "../styles/Slide.module.css";
import common from "../styles/Common.module.css";
import FlexImage from "./flexImage";

export default function Slide({ imageData }) {
    const images = imageData.map((image) => {
        return (
            <FlexImage
                src={image.src}
                alt={image.alt}
                maxHeight="500px"
            ></FlexImage>
        );
    });

    return <div className={styles.slide}>{images}</div>;
}
