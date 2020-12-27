import Head from "next/head";
import Link from "next/link";
import ReactPlayer from "react-player/youtube";
import { getBandData, getPaths } from "../../lib/videos";
import Layout from "../../components/layout";
import styles from "../../styles/Band.module.css";
import { motion } from "framer-motion";

let easing = [0.175, 0.85, 0.42, 0.96];
export async function getStaticProps({ params }) {
  const band = getBandData(params);
  return {
    props: {
      band,
    },
  };
}

export function getStaticPaths() {
  const paths = getPaths();
  return {
    paths,
    fallback: false,
  };
}

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing,
    },
  },
};

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing },
  },
};

export default function Band({ band }) {
  return (
    <Layout>
      <Head>
        <title>{band.bandName}</title>
      </Head>
      <motion.div layout initial="exit" animate="enter" exit="exit">
        <motion.h2 variants={textVariants} className={styles.header}>
          {band.bandName}
        </motion.h2>
        <ul className={styles.list}>
          {band.videos.map((video, key) => (
            <li key={key}>
              <ReactPlayer
                light={true}
                controls={true}
                url={video.url}
                width="100%"
                height="100%"
              ></ReactPlayer>
            </li>
          ))}
        </ul>
        <motion.div variants={backVariants} className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
