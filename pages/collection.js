import Layout from "../components/layout";
import CardGrid from "../components/cardGrid";
import styles from "../styles/Collection.module.css";
import common from "../styles/Common.module.css";

export default function Collection() {
    const collections = [
        {
            title: "Paper",
            image: {
                src: "/Collection_Paper.jpg",
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
            <CardGrid cardData={collections} imageContainerHeight={"218px"} />
        </Layout>
    );
}
