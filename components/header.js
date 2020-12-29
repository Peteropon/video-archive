import styles from "./header.module.css";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      delay: 0.3,
      duration: 1,
    },
  },
};
export default function Header() {
  return (
    <header className={styles.titleWrapper}>
      <motion.div initial="hidden" animate="visible" variants={headerVariants}>
        <h1 className={styles.title}>Petros video archives</h1>
      </motion.div>
    </header>
  );
}
