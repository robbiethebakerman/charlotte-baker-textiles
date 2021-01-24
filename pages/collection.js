import Layout from "../components/layout";
import CardGrid from "../components/cardGrid";
import styles from "../styles/Collection.module.css";
import common from "../styles/Common.module.css";

export default function Collection() {
    const collections = [
        {
            title: "Textiles",
            image: {
                src: "https://via.placeholder.com/264x199",
                alt: "",
            },
        },
        {
            title: "Paper",
            image: {
                src: "/Collection_Paper.jpg",
                alt: "",
            },
        },
        {
            title: "Accessories",
            image: {
                src: "https://via.placeholder.com/264x199",
                alt: "",
            },
        },
    ];

    return (
        <Layout>
            <h1>Collection</h1>
            <div className={styles.textBody}>
                <p>This page is currently under construction.</p>
            </div>
            <CardGrid cardData={collections} imageContainerHeight={"215px"} />
        </Layout>
    );
}
