import common from "../styles/Common.module.css";
import Layout from "../components/layout";
import styles from "../styles/Contact.module.css";

export default function Contact() {
    return (
        <Layout>
            <h1>Contact</h1>
            <p className={styles.text}>
                EMAIL: charlottebakerconservation@gmail.com
            </p>
            <p className={styles.text}>
                Please feel free to contact me for enquiries.
            </p>
        </Layout>
    );
}
