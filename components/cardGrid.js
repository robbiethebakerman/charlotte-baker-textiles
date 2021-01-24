import styles from "../styles/CardGrid.module.css";
import Card from "../components/card";

export default function CardGrid({ cardData, imageContainerHeight }) {
    const cards = cardData.map((item) => {
        return (
            <Card
                key={item.title}
                title={item.title}
                subTitle={item.subTitle}
                image={item.image}
                link={item.link}
                source={item.source}
                mediaType={item.mediaType}
                date={item.date}
                imageContainerHeight={imageContainerHeight}
            ></Card>
        );
    });

    const gridClass = GetGridClass();

    function GetGridClass() {
        let gridClass = `${styles.grid}`;

        switch (cards.length % 4) {
            case 1:
                gridClass += ` ${styles.mod4r1}`;
                break;
            case 2:
                gridClass += ` ${styles.mod4r2}`;
                break;
            case 3:
                gridClass += ` ${styles.mod4r3}`;
                break;
            default:
                break;
        }

        switch (cards.length % 3) {
            case 0:
                gridClass += ` ${styles.mod3r0}`;
                break;
            case 1:
                gridClass += ` ${styles.mod3r1}`;
                break;
            case 2:
                gridClass += ` ${styles.mod3r2}`;
                break;
            default:
                break;
        }

        if (cards.length % 2 === 0) gridClass += ` ${styles.mod2r0}`;
        else gridClass += ` ${styles.mod2r1}`;

        return gridClass;
    }

    return (
        <div className={styles.container}>
            <div className={gridClass}>{cards}</div>
        </div>
    );
}
