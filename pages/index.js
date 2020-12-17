import Head from "next/head";
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
    <div className={styles.container}>
      <Head>
        <title>Petros Video Archive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            <Link key={key} href={"/bands/band"}>
              <a className={styles.card}>
                <h3>{band.bandName} &rarr;</h3>
                <p>{band.videos.length} videos</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
