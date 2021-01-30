import styles from "../styles/About.module.css";
import common from "../styles/Common.module.css";
import Layout from "../components/layout";
import FlexImage from "../components/flexImage";

export default function About() {
    return (
        <Layout>
            <h1>About Me</h1>
            <div className={styles.grid}>
                <FlexImage
                    src="/CharlotteProfileWorking.jpg"
                    alt="Charlotte Baker with a mounted dress"
                    caption="Image blurb"
                />
                <div className={common.textBody}>
                    <p>
                        Charlotte Baker specialises in the preservation and
                        conservation of textile objects, having graduated from
                        the Centre for Textile Conservation, University of
                        Glasgow with an MPhil in Textile Conservation (2019).
                        After graduating Charlotte completed a year-long Textile
                        Conservation Internship at the Bowes Museum supported by
                        the Institute of Conservation and the Heritage Lottery
                        Fund.
                    </p>
                    <p>
                        This website, which is currently under construction,
                        will provide a platform to highlight some of the
                        conservation services that will be available to
                        institutions and private individuals.
                    </p>
                </div>
            </div>
            <h2>Contact</h2>
            <p className={styles.contactText}>
                Please feel free to contact me for enquiries.
            </p>
        </Layout>
    );
}
