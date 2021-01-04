import Head from "next/head";
import { VideoAccordion } from "../../components/videoAccordion";
import { getBandData, getPaths } from "../../lib/videos";
import Layout from "../../components/layout";
import styles from "../../styles/Band.module.css";
import { motion } from "framer-motion";

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
    <Layout>
      <Head>
        <title>{band.bandName}</title>
      </Head>
      <h2 className={styles.header}>{band.bandName}</h2>
      <ul className={styles.list}>
        {band.videos.map((video, key) => (
          <li key={key}>
            <VideoAccordion video={video} />
          </li>

          // <li key={key}>
          //   <ReactPlayer
          //     light={true}
          //     controls={true}
          //     url={video.url}
          //     width="100%"
          //     height="100%"
          //   ></ReactPlayer>
          // </li>
        ))}
      </ul>
    </Layout>
  );
}
