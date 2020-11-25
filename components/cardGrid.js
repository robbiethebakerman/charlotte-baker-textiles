import styles from "../styles/CardGrid.module.css";
import Card from "../components/card";

export default function CardGrid({ cardData }) {
    const cards = cardData.map((item) => {
        return (
            <Card
                key={item.title}
                title={item.title}
                image={item.image}
                link={item.link}
            ></Card>
        );
    });

    return <div className={styles.grid}>{cards}</div>;
}
