import styles from "../styles/Nav.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Nav({ page }) {
    const [listClass, setListClass] = useState(styles.list);
    const [hamburgerClass, setHamburgerClass] = useState(
        styles.hamburgerButton
    );

    function handleHamburgerClick() {
        if (listClass === styles.list) {
            setListClass(`${styles.listResponsive} ${styles.list}`);
            setHamburgerClass(
                `${styles.closeButton} ${styles.hamburgerButton}`
            );
        } else {
            setListClass(styles.list);
            setHamburgerClass(styles.hamburgerButton);
        }
    }

    return (
        <nav className={styles.nav}>
            <button className={hamburgerClass} onClick={handleHamburgerClick}>
                <div className={styles.hamburgerSlice}></div>
                <div className={styles.hamburgerSlice}></div>
                <div className={styles.hamburgerSlice}></div>
            </button>
            <ul className={listClass}>
                <li className={page === "home" ? styles.selected : undefined}>
                    <Link href="/">HOME</Link>
                </li>
                <li className={page === "about" ? styles.selected : undefined}>
                    <Link href="/about">ABOUT</Link>
                </li>
                <li
                    className={
                        page === "services" ? styles.selected : undefined
                    }
                >
                    <Link href="/services">SERVICES</Link>
                </li>
                <li
                    className={
                        page === "projects" ? styles.selected : undefined
                    }
                >
                    <Link href="/projects">PROJECTS</Link>
                </li>
                <li className={page === "media" ? styles.selected : undefined}>
                    <Link href="/media">MEDIA</Link>
                </li>
                <li
                    className={
                        page === "collection" ? styles.selected : undefined
                    }
                >
                    <Link href="/collection">COLLECTION</Link>
                </li>
            </ul>
        </nav>
    );
}
