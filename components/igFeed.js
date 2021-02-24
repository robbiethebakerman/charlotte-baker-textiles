import styles from "../styles/IgFeed.module.css";
import FlexImage from "./flexImage";
import Anchor from "./anchor";

export default function IgFeed({ igPosts }) {
    const igLinks = igPosts.data.slice(0, 5).map((item) => {
        return (
            <Anchor
                key={item.id}
                className={styles.igLink}
                href={item.permalink}
            >
                <FlexImage
                    src={item.thumbnail_url || item.media_url}
                    alt="Instagram post from Charlotte Baker Textiles"
                />
            </Anchor>
        );
    });

    return (
        <div className={styles.container}>
            <div className={styles.linkContainer}>
                <Anchor
                    className={styles.link}
                    href="https://www.instagram.com/charlottebakertextiles/"
                >
                    @instagram
                </Anchor>
            </div>
            <div className={styles.igLinkContainer}>{igLinks}</div>
        </div>
    );
}
