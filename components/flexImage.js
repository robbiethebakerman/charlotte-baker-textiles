import styles from "../styles/FlexImage.module.css";
import common from "../styles/Common.module.css";

export default function FlexImage({
    src,
    alt,
    containerHeight,
    maxwidth,
    caption,
    border,
}) {
    let containerClass = `${styles.container}`;

    if (border) containerClass += ` ${styles.border}`;

    return (
        <div>
            <div>
                <div
                    className={containerClass}
                    style={{
                        height: containerHeight,
                        minHeight: containerHeight,
                        maxWidth: maxwidth,
                    }}
                >
                    <div>
                        <img src={src} alt={alt}></img>
                    </div>
                </div>
                <p className={caption ? styles.caption : common.hide}>
                    {caption}
                </p>
            </div>
        </div>
    );
}
