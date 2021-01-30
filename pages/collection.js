import Layout from "../components/layout";
import CardGrid from "../components/cardGrid";
import common from "../styles/Common.module.css";

export default function Collection() {
    const collections = [
        {
            title: "Textiles",
            image: {
                src: "https://via.placeholder.com/264x234",
                alt: "",
            },
        },
        {
            title: "Paper",
            image: {
                src: "https://via.placeholder.com/264x234",
                alt: "",
            },
        },
        {
            title: "Accessories",
            image: {
                src: "/Collection_Accessories.jpg",
                alt: "",
            },
        },
    ];

    return (
        <Layout>
            <h1>Collection</h1>
            <div className={common.textBodyCentred}>
                <p>This page is currently under construction.</p>
            </div>
            <CardGrid cardData={collections} imageContainerHeight={"250px"} />
        </Layout>
    );
}
