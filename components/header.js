import styles from "../styles/Header.module.css";
import Nav from "./nav";

export default function Header({ page }) {
    return (
        <header className={styles.header}>
            <div className={styles.titleBar}>
                <img
                    src="/CB.png"
                    alt="Charlotte Baker Textiles logo"
                    className={styles.logo}
                ></img>
                <h1>CHARLOTTE BAKER TEXTILES</h1>
            </div>
            <Nav page={page} />
        </header>
    );
}
