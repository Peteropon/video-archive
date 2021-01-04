import ReactPlayer from "react-player/youtube";

export const Player = ({ url }) => {
  return (
    <ReactPlayer
      light={true}
      controls={true}
      url={url}
      width="100%"
      height="100%"
    ></ReactPlayer>
  );
};
