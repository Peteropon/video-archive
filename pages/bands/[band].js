import Head from "next/head";
import ReactPlayer from "react-player/youtube";
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
  return (
    <Layout>
      <Head>
        <title>{band.bandName}</title>
      </Head>
      <header className={styles.header}>{band.bandName}</header>
      <ul className={styles.list}>
        {band.videos.map((video, key) => (
          <li>
            <ReactPlayer
              key={key}
              light={true}
              controls={true}
              url={video.url}
              width="100%"
              height="100%"
            ></ReactPlayer>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
