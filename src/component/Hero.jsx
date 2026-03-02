import React from "react";
import { motion } from 'framer-motion';
import oipImage from "../assets/OIP.jpg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

export default function Hero() {
  return (<section id="home" className="h-screen flex items-center justify-center">
    <div className="border-b border-neutral-900 pb-4 w-full">
      <div className="flex flex-wrap">
        {/* left column: text */}
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
              Cybersecurity Professional
            </motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible" 
            className="my-2 max-w-lg tracking-tighter py-6 font-light">
              I specialize in building secure, robust, and scalable web solutions with a strong foundation in cybersecurity principles. Leveraging technologies like React, Node.js, and MongoDB, I not only develop end-to-end applications but also ensure they are resilient against modern threats. My skill set spans full-stack development and secure coding practices, allowing me to design systems that prioritize data integrity, access control, and threat mitigation from the ground up. With a focus on both functionality and security, I aim to deliver high-quality code that meets performance benchmarks while adhering to best practices in cybersecurity.
            </motion.p>
          </div>
        </div>
        {/* right column: hero image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={oipImage}
            alt="Cybersecurity illustration"
            className="max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    </section>
  );
}
