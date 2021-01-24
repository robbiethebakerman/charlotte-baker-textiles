import common from "../styles/Common.module.css";
import Layout from "../components/layout";
import CardGrid from "../components/cardGrid";
import IgFeed from "../components/igFeed";

export default function Projects({ igPosts }) {
    const projects = [
        {
            title: "ICON Textile Conservation internship at the Bowes Museum",
            image: {
                src: "/Projects_IconIntern.jpg",
                alt: "Charlotte Baker performing a conservation clean",
            },
        },
        {
            title:
                "MPhil Textile Conservation dissertation on museum shoe storage",
            image: {
                src: "/Projects_ShoeStorageDissertation.jpg",
                alt: "Bespoke external shoe storage mount",
            },
        },
        {
            title: "The John Bright Collection",
            subTitle: "Costume Mounting",
            image: {
                src: "/Projects_JohnBright1.jpg",
                alt: "John Bright Costume Mounting",
            },
        },
    ];

    return (
        <Layout>
            <h1>Projects</h1>
            <div className={common.textBodyCentred}>
                <p>This page is currently under construction.</p>
            </div>
            <CardGrid cardData={projects} imageContainerHeight={"351px"} />
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
