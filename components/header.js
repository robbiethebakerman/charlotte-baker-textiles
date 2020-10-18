import styles from "../styles/Header.module.css";
import Nav from "./nav";

export default function Header() {
    return (
        <header className={styles.header}>
            <img
                src="/CB.png"
                alt="Charlotte Baker Textiles logo"
                className={styles.logo}
            ></img>
            <h1>Charlotte Baker Textiles</h1>
            <Nav />
        </header>
    );
}
