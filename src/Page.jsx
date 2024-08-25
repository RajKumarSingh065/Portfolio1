import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import useParallax from "./useParallax";

function Page({ title, content }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section ref={ref} className="section">
      <motion.div style={{ y }}>
        <h2>{title}</h2>
        <p>{content}</p>
      </motion.div>
    </section>
  );
}

export default Page;
