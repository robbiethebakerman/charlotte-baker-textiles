import Layout from "../components/layout";
import CardGrid from "../components/cardGrid";
import IgFeed from "../components/igFeed";

export default function Media({ igPosts }) {
    const blogPosts = [
        {
            title:
                "Behind Closed Doors: Bowes Museum Icon Interns Preventive Conservation Project",
            mediaType: "Article",
            image: {
                src: "/IconLogo.png",
                alt: "Institute of Conservation (ICON)",
            },
            link: {
                href:
                    "https://icon.org.uk/news/behind-closed-doors-bowes-museum-icon-interns-preventive-conservation-project?fbclid=IwAR3V8Q2sVBOgKY0VkpnGO9o3KEcfTbBVBoS9u9VAQ-ps1yX0clUvkuWMD00",
            },
            source: "ICON News",
            date: "2 November 2020",
        },
        {
            title:
                "Displaying Textiles: Mounting Historic Dress from the Tullie House Museum & Art Gallery Collection",
            mediaType: "Article",
            image: {
                src: "/BowesLogo.png",
                alt: "The Bowes Museum",
            },
            link: {
                href:
                    "https://thebowesmuseum.wordpress.com/2020/09/21/displaying-textiles-mounting-historic-dress-from-the-tullie-house-museum-art-gallery-collection/?fbclid=IwAR2ZJSxNPbn046InVVPG-RBTrIckyRK9OyJkLzctStC7cY-N9wuMb2uS5-I",
            },
            source: "The Bowes Museum Blog",
            date: "21 September 2020",
        },
        {
            title: "Meet Charlotte Cameron #BowesStaff",
            mediaType: "Article",
            image: {
                src: "/BowesLogo.png",
                alt: "The Bowes Museum",
            },
            link: {
                href:
                    "https://thebowesmuseum.wordpress.com/2020/03/03/meet-charlotte-our-textile-conservation-intern/?fbclid=IwAR3xKn5AeB4HC0LTHGjbklJL81oCwWtADC3oJqLE_11oDPqac9McMCyWNj0",
            },
            source: "The Bowes Museum Blog",
            date: "3 March 2020",
        },
        {
            title: "A Collaborative Project: Identifying Viscose Rayon",
            mediaType: "Article",
            image: {
                src: "/UofGLogo.png",
                alt: "University of Glasgow",
            },
            link: {
                href:
                    "http://textileconservation.academicblogs.co.uk/a-collaborative-project-identifying-viscose-rayon/?fbclid=IwAR2CgZm7g8ITUIyr3j6xuczHMwMVKI7_j8ha2m1D-7dcg6ZbDMoBlix-Cjg",
            },
            source:
                "Textile Conservation blog (Centre for Textile Conservation, University of Glasgow)",
            date: "14 January 2020",
        },
        {
            title:
                "A group project: Conservation treatment of a 1930’s printed dress",
            mediaType: "Article",
            image: {
                src: "/UofGLogo.png",
                alt: "University of Glasgow",
            },
            link: {
                href:
                    "http://textileconservation.academicblogs.co.uk/a-group-project-conservation-treatment-of-a-1930s-printed-dress/?fbclid=IwAR0uF8bQAWvqYy4kno5DsGoSV6gi4-4UeyYghHyCnQFFgNC9THXqZXGV-wA",
            },
            source:
                "Textile Conservation blog (Centre for Textile Conservation, University of Glasgow)",
            date: "25 September 2019",
        },
        {
            title:
                "Wimbledon Costume graduates lend their skills to The John Bright Historic Costume Collection project",
            mediaType: "Article",
            image: {
                src: "/ualWimbledonLogo.png",
                alt: "Wimbledon College of Arts, University of the Arts London",
            },
            link: {
                href:
                    "https://www.arts.ac.uk/colleges/wimbledon-college-of-arts/stories/wimbledon-costume-graduates-lend-their-skills-to-the-john-bright-historic-costume-collection-project?fbclid=IwAR0_Gsb5lASaZIbVN4LlPWYn6QDLwIBeJPLSVfV0ty_TUowrVe2WnoG53ZM",
            },
            source: "Wimbledon College of Arts stories",
            date: "4 April 2017",
        },
    ];

    return (
        <Layout>
            <h1>Media</h1>
            <CardGrid cardData={blogPosts} imageContainerHeight={"121px"} />
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
