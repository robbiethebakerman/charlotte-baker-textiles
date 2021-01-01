import styles from "../styles/About.module.css";
import common from "../styles/Common.module.css";
import Layout from "../components/layout";
import IgFeed from "../components/igFeed";

export default function About({ igPosts }) {
    return (
        <Layout>
            <h1>About Me</h1>
            <div className={styles.grid}>
                <div className={common.imageContainer}>
                    <div>
                        <img
                            src="/CharlotteProfileWorking.jpg"
                            alt="Charlotte Baker with a mounted dress"
                            className={common.image}
                        ></img>
                        <p className={common.imageCaption}>Image blurb</p>
                    </div>
                </div>
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
            <IgFeed igPosts={igPosts} />
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,username,timestamp&access_token=" +
            process.env.IG_ACCESS_TOKEN
    );
    const igPosts = await res.json();

    return {
        props: {
            igPosts: igPosts,
        },
        revalidate: 1, // In seconds
    };
}
