import styles from "../styles/FlexImage.module.css";

export default function FlexImage({ src, alt, caption }) {
    return (
        <div className={styles.imageContainer}>
            <div>
                <img src={src} alt={alt}></img>
                <p className={styles.imageCaption}>{caption}</p>
            </div>
        </div>
    );
}
