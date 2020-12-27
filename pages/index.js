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

const postVariants = {
  initial: { scale: 0.86, y: 50, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.8,
    y: 30,
    opacity: 0,
    transition: { duration: 0.15, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const headerVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      delay: 0.3,
      duration: 1,
    },
  },
};

export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <motion.div
        layout
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          exit: { transition: { staggerChildren: 0.1 } },
        }}
        className={styles.main}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <h1 className={styles.title}>Welcome to my video archives!</h1>
        </motion.div>
        <ul className={styles.grid}>
          {data.map(({ path, bandName, videos }, key) => (
            <motion.li
              scroll={false}
              key={key}
              className={styles.card}
              variants={postVariants}
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
        )
      </motion.div>
    </Layout>
  );
}
