import common from "../styles/Common.module.css";
import styles from "../styles/Services.module.css";
import Layout from "../components/layout";
import Card from "../components/card";
import CardGrid from "../components/cardGrid";

export default function Services() {
    const cardData = [
        {
            title: "Service 1",
            image: {
                src: "/CB.png",
                alt: "Charlotte Baker Textiles logo",
            },
        },
        {
            title: "Service 2",
            image: {
                src: "/CB.png",
                alt: "Charlotte Baker Textiles logo",
            },
        },
        {
            title: "Service 3",
            image: {
                src: "/CB.png",
                alt: "Charlotte Baker Textiles logo",
            },
        },
        {
            title: "Service 4",
            image: {
                src: "/CB.png",
                alt: "Charlotte Baker Textiles logo",
            },
        },
    ];

    return (
        <Layout>
            <h1>Services</h1>
            <CardGrid cardData={cardData}></CardGrid>
        </Layout>
    );
}
