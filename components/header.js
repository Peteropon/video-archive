import styles from "./header.module.css";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { y: "-100%", scale: 1, opacity: 0 },
  visible: {
    y: "0%",
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

const titleVariants = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      delay: 0.8,
      duration: 1,
    },
  },
};
export default function Header() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={styles.titleWrapper}
    >
      <motion.div initial="hidden" animate="visible" variants={titleVariants}>
        <h1 className={styles.title}>Petros video archives</h1>
      </motion.div>
    </motion.div>
  );
}
