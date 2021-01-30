import styles from "../styles/FlexImage.module.css";

export default function FlexImage({
    src,
    alt,
    caption,
    containerHeight,
    maxwidth,
}) {
    return (
        <div
            className={styles.imageContainer}
            style={{
                height: containerHeight,
                minHeight: containerHeight,
                maxWidth: maxwidth,
            }}
        >
            <div>
                <img src={src} alt={alt}></img>
                <p className={styles.imageCaption}>{caption}</p>
            </div>
        </div>
    );
}
