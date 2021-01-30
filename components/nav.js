import styles from "../styles/Nav.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Nav() {
    const [listClass, setListClass] = useState(styles.list);

    function handleHamburgerClick() {
        if (listClass === styles.list) {
            setListClass(`${styles.listResponsive} ${styles.list}`);
        } else {
            setListClass(styles.list);
        }
    }

    return (
        <nav className={styles.nav}>
            <button
                className={styles.hamburgerButton}
                onClick={handleHamburgerClick}
            >
                <div className={styles.hamburgerSlice}></div>
                <div className={styles.hamburgerSlice}></div>
                <div className={styles.hamburgerSlice}></div>
            </button>
            <ul className={listClass}>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/about">ABOUT</Link>
                </li>
                <li>
                    <Link href="/services">SERVICES</Link>
                </li>
                <li>
                    <Link href="/projects">PROJECTS</Link>
                </li>
                <li>
                    <Link href="/media">MEDIA</Link>
                </li>
                <li>
                    <Link href="/collection">COLLECTION</Link>
                </li>
            </ul>
        </nav>
    );
}
