import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollUI() {
  const { scrollYProgress } = useScroll();
  const [showTop, setShowTop] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setShowTop(latest > 0.08);
  });

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-purple-500 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
      />

      {/* Back to top button */}
      <motion.button
        aria-label="Back to top"
        onClick={handleTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-purple-600 text-white dark:text-white p-3 shadow-lg hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
      >
        <FaArrowUp />
      </motion.button>
    </>
  );
}
