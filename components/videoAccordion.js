import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "./player";

const Accordion = ({ title, url, expanded, setExpanded }) => {
  const isOpen = title === expanded;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : title)}
      >
        {title}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Player url={url} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const VideoAccordion = ({ video }) => {
  const [expanded, setExpanded] = useState(0);

  return (
    <Accordion
      title={video.title}
      url={video.url}
      expanded={expanded}
      setExpanded={setExpanded}
    />
  );
};
