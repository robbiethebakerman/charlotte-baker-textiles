import cardGrid from "../styles/CardGrid.module.css";
import styles from "../styles/Media.module.css";
import Layout from "../components/layout";
import CardGrid from "../components/cardGrid";

export default function Media({ posts }) {
    const media = [
        {
            title: "Blog Post 1",
            image: {
                src: "/CB.png",
                alt: "Charlotte Baker Textiles logo",
            },
        },
        {
            title: "Blog Post 2",
            image: {
                src: "/CB.png",
                alt: "Charlotte Baker Textiles logo",
            },
        },
    ];

    const igLinks = posts.data.slice(0, 3).map((item) => {
        return (
            <a
                className={styles.igLink}
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
            >
                <img
                    src={item.media_url}
                    alt="Instagram post from Charlotte Baker Textiles"
                ></img>
            </a>
        );
    });

    return (
        <Layout>
            <h1>Media</h1>
            <CardGrid cardData={media} />
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
            <div className={cardGrid.container}>
                <div className={cardGrid.grid3column}>{igLinks}</div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,username,timestamp&access_token=" +
            process.env.IG_ACCESS_TOKEN
    );
    const posts = await res.json();

    return {
        props: {
            posts,
        },
        revalidate: 1, // In seconds
    };
}
