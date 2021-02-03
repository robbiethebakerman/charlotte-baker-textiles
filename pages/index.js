import styles from "../styles/Home.module.css";
import common from "../styles/Common.module.css";
import Layout from "../components/layout";
import IgFeed from "../components/igFeed";
import Slideshow from "../components/slideshow";

export default function Home({ igPosts }) {
    return (
        <Layout page="home">
            <div className={styles.slideshowContainer}>
                <Slideshow />
            </div>
            <IgFeed igPosts={igPosts} />
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,username,timestamp&access_token=" +
            process.env.IG_ACCESS_TOKEN
    );
    const igPosts = await res.json();

    return {
        props: {
            igPosts: igPosts,
        },
        revalidate: 1, // In seconds
    };
}
