import Head from "next/head";
import ReactPlayer from "react-player/youtube";
import { getBandData, getPaths } from "../../lib/videos";

export async function getStaticProps({ params }) {
  const band = getBandData(params);
  console.log(band);
  return {
    props: {
      band,
    },
  };
}

export function getStaticPaths() {
  const paths = getPaths();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export default function Band({ band }) {
  return (
    <>
      <Head>
        <title>{band.bandName}</title>
      </Head>
      <header>{band.bandName}</header>
      {band.videos.map((video, key) => (
        <ReactPlayer
          key={key}
          light={true}
          controls={true}
          url={video.url}
        ></ReactPlayer>
      ))}
    </>
  );
}
