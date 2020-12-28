import Head from "next/head";
import Link from "next/link";
import ReactPlayer from "react-player/youtube";
import { getBandData, getPaths } from "../../lib/videos";
import styles from "../../styles/Band.module.css";
import { motion } from "framer-motion";

const ease = [0.43, 0.13, 0.23, 0.96];

const pageVariants = {
  initial: {
    y: "50%",
    opacity: 0,
    transition: { ease, duration: 0.8, delay: 0.8 },
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: { ease, duration: 0.8 },
  },
  exit: {
    y: "50%",
    opacity: 0,
    transition: { ease, duration: 0.8, delay: 0.8 },
  },
};
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

export default function Band({ band }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <motion.h2 className={styles.header}>{band.bandName}</motion.h2>
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
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </motion.div>
  );
}
