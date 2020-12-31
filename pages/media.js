import common from "../styles/Common.module.css";
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

    console.log("IG posts: ", posts);

    return (
        <Layout>
            <h1>Media</h1>
            <CardGrid cardData={media} />
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
