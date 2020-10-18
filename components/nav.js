import styles from "../styles/Nav.module.css";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">About</Link>
                </li>
                <li>
                    <Link href="/">Services</Link>
                </li>
                <li>
                    <Link href="/">Projects</Link>
                </li>
                <li>
                    <Link href="/">Media</Link>
                </li>
                <li>
                    <Link href="/">Contact</Link>
                </li>
                <li>
                    <Link href="/">Collection</Link>
                </li>
            </ul>
        </nav>
    );
}
