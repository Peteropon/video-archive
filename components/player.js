import ReactPlayer from "react-player/youtube";
import styles from "./videoAccordion.module.css";

export const Player = ({ url }) => {
  return (
    <ReactPlayer
      className={styles.player}
      light={true}
      controls={true}
      url={url}
      width="100%"
      height="100%"
    />
  );
};
