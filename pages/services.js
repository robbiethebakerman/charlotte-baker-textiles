import Layout from "../components/layout";
import CardGrid from "../components/cardGrid";

export default function Services() {
    const services = [
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
            <CardGrid cardData={services}></CardGrid>
        </Layout>
    );
}
