import styles from "../styles/IgFeed.module.css";
import common from "../styles/Common.module.css";

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
                <div className={common.imageContainer}>
                    <div>
                        <img
                            src={item.thumbnail_url || item.media_url}
                            alt="Instagram post from Charlotte Baker Textiles"
                        ></img>
                    </div>
                </div>
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
