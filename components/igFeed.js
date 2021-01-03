import styles from "../styles/IgFeed.module.css";
import FlexImage from "./flexImage";

export default function IgFeed({ igPosts }) {
    const igLinks = igPosts.data.slice(0, 5).map((item) => {
        return (
            <a
                key={item.id}
                className={styles.igLink}
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FlexImage
                    src={item.thumbnail_url || item.media_url}
                    alt="Instagram post from Charlotte Baker Textiles"
                />
            </a>
        );
    });

    return (
        <div className={styles.container}>
            <h2>
                <a
                    className={styles.link}
                    href="https://www.instagram.com/charlottebakertextiles/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @instagram
                </a>
            </h2>
            <div className={styles.igLinkContainer}>{igLinks}</div>
        </div>
    );
}
