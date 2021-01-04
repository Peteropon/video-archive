import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    </>
  );
};

export const VideoAccordion = (video) => {
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
