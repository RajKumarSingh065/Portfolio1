import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import useParallax from "./useParallax";

function Section({ title, content }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section ref={ref} className="section">
      <motion.div style={{ y }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <h2>{title}</h2>
        <p>{content}</p>
      </motion.div>
    </section>
  );
}

export default Section;
