import styles from "../styles/Footer.module.css";
import Anchor from "./anchor";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright © 2021 Charlotte Baker</p>
            <Anchor href="https://www.instagram.com/charlottebakertextiles/">
                <img
                    src="/instagram-logo.png"
                    alt="Instagram Logo"
                    className={styles.icon}
                />
            </Anchor>
            <Anchor href="https://www.linkedin.com/in/charlottelolitacameron/">
                <img
                    src="/linkedin.png"
                    alt="Linked In Logo"
                    className={styles.icon}
                />
            </Anchor>
        </footer>
    );
}
