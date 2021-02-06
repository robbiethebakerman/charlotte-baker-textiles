import styles from "../styles/Slideshow.module.css";
import common from "../styles/Common.module.css";
import FlexImage from "./flexImage";

export default function Slideshow() {
    return (
        <div className={styles.container}>
            <FlexImage
                src="/Slideshow_Fan.jpg"
                alt="Fan in need of conservation"
                maxwidth="700px"
            ></FlexImage>
        </div>
    );
}
