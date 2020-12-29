import common from "../styles/Common.module.css";
import Layout from "../components/layout";
import CardGrid from "../components/cardGrid";

export default function Collection() {
    const collections = [
        {
            title: "Textiles",
            image: {
                src: "/CB.png",
                alt: "Charlotte Baker Textiles logo",
            },
        },
        {
            title: "Paper",
            image: {
                src: "/CB.png",
                alt: "Charlotte Baker Textiles logo",
            },
        },
        {
            title: "Accessories",
            image: {
                src: "/CB.png",
                alt: "Charlotte Baker Textiles logo",
            },
        },
        {
            title: "Other",
            image: {
                src: "/CB.png",
                alt: "Charlotte Baker Textiles logo",
            },
        },
    ];

    return (
        <Layout>
            <h1>Collection</h1>
            <CardGrid cardData={collections} />
            <p>
                A someone personally interested, I have a collection of objects
                related to fashion history and sewing paraphernalia.
            </p>
            <p>
                Eergqerh eh eqh qhlekwq hek heqwk wehq kweq hewqh. E rqehe heq
                ewh kl ewqh ek hqejwhjqwe hweh qew h kew khq ewh wqh, eh keqh
                khe ewh. T erhqeqrher heqrk rqeqrek rebk kre njeqrk jh hr eq
                breq bb.
            </p>
        </Layout>
    );
}
