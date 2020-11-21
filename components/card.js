import styles from "../styles/Card.module.css";

export default function Card({ title, image }) {
    return (
        <div className={styles.container}>
            <img src={image.src} alt={image.alt}></img>
            <h2>{title}</h2>
        </div>
    );
}
