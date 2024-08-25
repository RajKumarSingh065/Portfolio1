import React from "react";
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

export default function Hero() {
  return (<section id="home" className="py-5">
    <div  className="border-b border-neutral-900 lg:mb-35 pb-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)} // Fixed typo here
              initial="hidden"
              animate="visible"
              className="text-5xl font-thin pb-16 tracking-tight lg:mt-16 lg:text-7xl"
            >
              Raj Kumar Singh
            </motion.h1 >
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-indigo-400 bg-clip-text text-transparent tracking-tight text-4xl">
              Full Stack Developer
            </motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible" 
            className="my-2 max-w-lg tracking-tighter py-6 font-light">
              I specialize in building robust and scalable web solutions using the latest technologies. With a particular emphasis on React, Node.js, and MongoDB, I strive to deliver high-quality code that not only meets the requirements but also ensures exceptional user experiences. My expertise spans across both front-end and back-end development, allowing me to manage and integrate all aspects of a web application seamlessly.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
