import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import data from "../content.json";

export async function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <ul className={styles.grid}>
        {data.map(({ path, bandName, videos }, key) => (
          <motion.li
            key={key}
            className={styles.card}
            whileHover={{
              position: "relative",
              zIndex: 1,
              scale: 1.1,
              transition: { duration: 0.4 },
            }}
          >
            <Link scroll={false} href={`/bands/${path}`}>
              <a>
                <h3>{bandName} &rarr;</h3>
                <p>{videos.length} videos</p>
              </a>
            </Link>
          </motion.li>
        ))}
      </ul>
    </Layout>
  );
}
