import Head from "next/head";
import { useState } from "react";
import { VideoAccordion } from "../../components/videoAccordion";
import { getBandData, getPaths } from "../../lib/videos";
import Layout from "../../components/layout";
import styles from "../../styles/Band.module.css";

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
  const [expanded, setExpanded] = useState(false);

  return (
    <Layout>
      <Head>
        <title>{band.bandName}</title>
      </Head>
      <h2 className={styles.header}>{band.bandName}</h2>
      <ul className={styles.list}>
        {band.videos.map((video, key) => (
          <li key={key}>
            <VideoAccordion
              title={video.title}
              url={video.url}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
