import styles from "./layout.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const backVariants = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 1, delay: 1.4 },
  },
};
export default function Back() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={backVariants}
      whileHover={{ scale: 1.2 }}
      className={styles.backToHome}
    >
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </motion.div>
  );
}
