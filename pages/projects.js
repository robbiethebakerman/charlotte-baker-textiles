import common from "../styles/Common.module.css";
import Layout from "../components/layout";
import CardGrid from "../components/cardGrid";
import IgFeed from "../components/igFeed";

export default function Projects({ igPosts }) {
    const projects = [
        {
            title: "Project 1",
            image: {
                src: "/CB.png",
                alt: "Charlotte Baker Textiles logo",
            },
        },
        {
            title: "Project 2",
            image: {
                src: "/CB.png",
                alt: "Charlotte Baker Textiles logo",
            },
        },
        {
            title: "Project 3",
            image: {
                src: "/CB.png",
                alt: "Charlotte Baker Textiles logo",
            },
        },
    ];

    return (
        <Layout>
            <h1>Projects</h1>
            <CardGrid cardData={projects} />
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
