import styles from "../styles/CardGrid.module.css";
import Card from "../components/card";

export default function CardGrid({ cardData, imageContainerHeight }) {
    const cards = cardData.map((item) => {
        return (
            <Card
                key={item.title}
                title={item.title}
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

    // instead of these, need to have multiple classes,
    // and add classes based on remainder from % 4, % 3
    // can add multiple classes in CSS modules as follows:
    // className={`${styles.description} ${styles.yellow}`}
    function GetGridClass() {
        switch (cards.length) {
            case 1:
                return styles.grid1column;
            case 2:
                return styles.grid2column;
            case 3:
                return styles.grid3column;
            default:
                break;
        }

        let gridClass = `${styles.grid4column}`;

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

        if (cards.length % 2 === 1) gridClass += ` ${styles.mod2r1}`;
        else gridClass += ` ${styles.mod2r0}`;

        return gridClass;
    }

    return (
        <div className={styles.container}>
            <div className={gridClass}>{cards}</div>
        </div>
    );
}
