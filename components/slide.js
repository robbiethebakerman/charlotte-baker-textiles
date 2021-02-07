import styles from "../styles/Slide.module.css";
import common from "../styles/Common.module.css";
import FlexImage from "./flexImage";

export default function Slide({ imageData }) {
    const images = imageData.map((image, index, array) => {
        return (
            <FlexImage
                key={index}
                src={image.src}
                alt={image.alt}
                maxHeight="500px"
                margin={index < array.length - 1 ? "0 1rem 0 0" : undefined}
            ></FlexImage>
        );
    });

    return <div className={styles.slide}>{images}</div>;
}
