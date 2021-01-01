import styles from "../styles/IgFeed.module.css";

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
                <img
                    src={item.thumbnail_url || item.media_url}
                    alt="Instagram post from Charlotte Baker Textiles"
                ></img>
            </a>
        );
    });

    return (
        <div className={styles.container}>
            <h2>
                instagram{" "}
                <a
                    className={styles.link}
                    href="https://www.instagram.com/charlottebakertextiles/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @charlottebakertextiles
                </a>
            </h2>
            <div className={styles.igLinkContainer}>{igLinks}</div>
        </div>
    );
}
