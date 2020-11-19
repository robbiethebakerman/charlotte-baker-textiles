import styles from "../styles/Home.module.css";
import common from "../styles/Common.module.css";
import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <h1 className={common.title}>Charlotte Baker Textiles</h1>
        </Layout>
    );
}
