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
      <Head>{siteTitle}</Head>
      <main className={styles.main}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
                duration: 1,
              },
            },
          }}
        >
          <h1 className={styles.title}>Welcome to my video archives!</h1>
        </motion.div>

        <div className={styles.grid}>
          {data.map((band, key) => (
            <motion.ul
              key={key}
              className={styles.card}
              whileHover={{
                position: "relative",
                zIndex: 1,
                scale: 1.1,
                transition: { duration: 0.4 },
              }}
            >
              <Link href={`/bands/${band.path}`}>
                <a>
                  <h3>{band.bandName} &rarr;</h3>
                  <p>{band.videos.length} videos</p>
                </a>
              </Link>
            </motion.ul>
          ))}
        </div>
      </main>
    </Layout>
  );
}
