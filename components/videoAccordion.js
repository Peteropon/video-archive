import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "./player";
import styles from "./videoAccordion.module.css";

export const VideoAccordion = ({ title, url, expanded, setExpanded }) => {
  const isOpen = title === expanded;

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: "backInOut" },
      }}
    >
      <motion.header
        className={styles.header}
        initial={false}
        animate={{ backgroundColor: isOpen ? "#6d3800" : "#b85e00" }}
        onClick={() => setExpanded(isOpen ? false : title)}
      >
        {title}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.playerWrapper}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Player url={url} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
