import common from "../styles/Common.module.css";
import Layout from "../components/layout";
import CardGrid from "../components/cardGrid";

export default function Projects() {
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
        {
            title: "Project 4",
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
        </Layout>
    );
}
