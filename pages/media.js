import styles from "../styles/Media.module.css";
import Layout from "../components/layout";
import CardGrid from "../components/cardGrid";

export default function Media({ igPosts }) {
    const blogPosts = [
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

    return (
        <Layout>
            <h1>Media</h1>
            <CardGrid cardData={blogPosts} />
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
            <CardGrid cardData={igPosts} />
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,username,timestamp&access_token=" +
            process.env.IG_ACCESS_TOKEN
    );
    const resJson = await res.json();
    const igPosts = await resJson.data.slice(0, 3);

    return {
        props: {
            igPosts: igPosts,
        },
        revalidate: 1, // In seconds
    };
}
