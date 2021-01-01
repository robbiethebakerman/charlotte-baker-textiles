import styles from "../styles/CardGrid.module.css";
import Card from "../components/card";

export default function CardGrid({ cardData }) {
    const cards = cardData.map((item) => {
        return (
            <Card
                key={item.title || item.id}
                title={item.title}
                image={item.image}
                link={item.link}
                permalink={item.permalink}
                id={item.id}
                media_url={item.media_url}
            ></Card>
        );
    });

    let gridClass = styles.grid4column;

    switch (cards.length) {
        case 1:
            gridClass = styles.grid1column;
            break;
        case 2:
            gridClass = styles.grid2column;
            break;
        case 3:
            gridClass = styles.grid3column;
            break;
        default:
            gridClass = styles.grid4column;
            break;
    }

    return (
        <div className={styles.container}>
            <div className={gridClass}>{cards}</div>
        </div>
    );
}
