import Head from "next/head";
import ReactPlayer from "react-player";

export default function Band() {
  return (
    <>
      <Head>
        <title>Muse</title>
      </Head>
      <header>Muse - 2011</header>
      <ReactPlayer
        light="true"
        controls="true"
        url="https://www.youtube.com/watch?v=JPus8xP-6w0"
      ></ReactPlayer>
    </>
  );
}
