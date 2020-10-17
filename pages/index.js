import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Charlotte Baker Textiles</title>
                <link rel="icon" href="" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Charlotte Baker Textiles</h1>
            </main>

            <footer className={styles.footer}>
                <p>Copyright © 2020 Charlotte Baker</p>
                <a
                    href="https://www.instagram.com/charlottebakertextiles/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/instagram-logo.png"
                        alt="Instagram Logo"
                        className={styles["social-media-icon"]}
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/charlottelolitacameron/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/linkedin.png"
                        alt="Linked In Logo"
                        className={styles["social-media-icon"]}
                    />
                </a>
                <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="twitter.png"
                        alt="Twitter Logo"
                        className={styles["social-media-icon"]}
                    />
                </a>
            </footer>
        </div>
    );
}
