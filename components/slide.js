import styles from "../styles/Slide.module.css";
import common from "../styles/Common.module.css";
import FlexImage from "./flexImage";

export default function Slide({ src, alt }) {
    return (
        <div className={styles.slide}>
            <FlexImage src={src} alt={alt} maxHeight="500px"></FlexImage>
        </div>
    );
}
