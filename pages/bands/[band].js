import Head from "next/head";
import ReactPlayer from "react-player/youtube";
import { getBandData, getPaths } from "../../lib/videos";
import Layout from "../../components/layout";
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
      <motion.div initial="initial" animate="animate" exit="exit">
        <h2 className="header">{band.bandName}</h2>
        <ul className="list">
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
      </motion.div>
      <style jsx>{`
        .header {
          font-size: 1.5rem;
          color: #f59994;
        }

        .list {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          list-style: none;
        }

        .list li {
          flex-basis: 20%;
          margin: 0 2rem 1rem 0;
          top: 0;
          left: 0;
        }

        @media (max-width: 600px) {
          .list {
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </Layout>
  );
}
