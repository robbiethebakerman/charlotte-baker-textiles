import styles from "../styles/Card.module.css";
import FlexImage from "./flexImage";

export default function Card({
    title,
    subTitle,
    image,
    link,
    source,
    mediaType,
    date,
    imageContainerHeight,
}) {
    const img = (
        <FlexImage
            src={image.src}
            alt={image.alt}
            containerHeight={imageContainerHeight}
        />
    );

    if (mediaType) title = title + " (" + mediaType + ")";

    const text = (
        <div className={styles.text}>
            <h5
                className={
                    subTitle ? styles.denseHeading : styles.normalHeading
                }
            >
                {title}
            </h5>
            <h5 className={subTitle ? styles.subTitle : styles.hide}>
                {subTitle}
            </h5>
            <h6 className={source ? styles.source : styles.hide}>{source}</h6>
            <h6 className={date ? styles.date : styles.hide}>{date}</h6>
        </div>
    );

    if (link) {
        return (
            <a
                className={styles.container}
                href={link.href}
                target={link.target || "_blank"}
                rel="noopener noreferrer"
            >
                {img}
                {text}
            </a>
        );
    } else {
        return (
            <div className={styles.container}>
                {img}
                {text}
            </div>
        );
    }
}
