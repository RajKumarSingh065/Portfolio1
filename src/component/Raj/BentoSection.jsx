import { motion } from 'framer-motion';

const IMAGES = [
  '/project-soc-1.png',
  '/project-malware-1.png',
  '/project-soc-2.png',
  '/project-malware-2.png',
  '/project-soc-3.png',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function BentoSection() {
  return (
    <section className="bg-brand-teal-deep pt-24 sm:pt-32 md:pt-40 pb-24 sm:pb-28 overflow-hidden px-5 sm:px-8 md:px-10">
      <div className="flex flex-col items-center mb-14 sm:mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-6 sm:mb-8 text-brand-green"
        >
          System Interfaces
        </motion.span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]"
      >
        {/* Large Feature Item */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden relative group border border-[#ECEFF3]/10 bg-[#161E29]"
        >
          <img
            src={IMAGES[0]}
            alt="Project screenshot"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 duotone-shot"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131A24]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Small Items */}
        {IMAGES.slice(1).map((src, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="md:col-span-1 md:row-span-1 rounded-[2rem] overflow-hidden relative group border border-[#ECEFF3]/10 bg-[#161E29]"
          >
            <img
              src={src}
              alt="Project screenshot"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 duotone-shot"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131A24]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
