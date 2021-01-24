import Layout from "../components/layout";
import CardGrid from "../components/cardGrid";
import IgFeed from "../components/igFeed";

export default function Services({ igPosts }) {
    const services = [
        {
            title: "Bespoke Storage",
            image: {
                src: "https://via.placeholder.com/264x264",
                alt: "Charlotte Baker Textiles logo",
            },
        },
        {
            title: "Display and Mounting",
            image: {
                src: "https://via.placeholder.com/264x264",
                alt: "Charlotte Baker Textiles logo",
            },
        },
        {
            title: "Collection Care",
            image: {
                src: "https://via.placeholder.com/264x264",
                alt: "Charlotte Baker Textiles logo",
            },
        },
        {
            title: "Freelance Museum Work",
            image: {
                src: "https://via.placeholder.com/264x264",
                alt: "Charlotte Baker Textiles logo",
            },
        },
    ];

    return (
        <Layout>
            <h1>Services</h1>
            <CardGrid cardData={services}></CardGrid>
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
