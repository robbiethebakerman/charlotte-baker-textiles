import styles from "../styles/Card.module.css";
import common from "../styles/Common.module.css";

export default function Card({ title, image, link, source, mediaType, date }) {
    const img = (
        <div className={common.imageContainer}>
            <div>
                <img src={image.src} alt={image.alt}></img>
            </div>
        </div>
    );

    if (mediaType) title = title + " (" + mediaType + ")";

    const text = (
        <div>
            <h5>{title}</h5>
            <h6>{source}</h6>
            <h6>{date}</h6>
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
