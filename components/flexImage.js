import styles from "../styles/FlexImage.module.css";
import common from "../styles/Common.module.css";

export default function FlexImage({
    src,
    alt,
    caption,
    containerHeight,
    maxwidth,
}) {
    return (
        <div
            className={styles.container}
            style={{
                height: containerHeight,
                minHeight: containerHeight,
                maxWidth: maxwidth,
            }}
        >
            <div>
                <img src={src} alt={alt}></img>
                <p className={caption ? styles.caption : common.hide}>
                    {caption}
                </p>
            </div>
        </div>
    );
}
