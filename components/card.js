import styles from "../styles/Card.module.css";

export default function Card({ title, image, link, permalink, id, media_url }) {
    if (permalink) {
        return (
            <a
                className={styles.container}
                href={permalink}
                target="_blank"
                rel="noopener noreferrer"
                key={id}
            >
                <img
                    src={media_url}
                    alt="Instagram post from Charlotte Baker Textiles"
                ></img>
            </a>
        );
    } else if (link) {
        return (
            <a
                className={styles.container}
                href={link.href}
                target={link.target || "_blank"}
                rel="noopener noreferrer"
            >
                <img src={image.src} alt={image.alt}></img>
                <h2>{title}</h2>
            </a>
        );
    } else {
        return (
            <div className={styles.container}>
                <img src={image.src} alt={image.alt}></img>
                <h2>{title}</h2>
            </div>
        );
    }
}
