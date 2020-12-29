import Meta from "./meta";
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <Meta />
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
            </div>
        </div>
    );
}
