import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
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
                    className={styles.icon}
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
                    className={styles.icon}
                />
            </a>
        </footer>
    );
}
