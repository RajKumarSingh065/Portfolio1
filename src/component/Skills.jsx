// Import icons from dedicated entry points to avoid duplicate module imports
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaJava, FaNodeJs } from "react-icons/fa6";
import { FaShieldAlt, FaLock, FaNetworkWired } from "react-icons/fa";
import { SiJavascript, SiHtml5 } from "react-icons/si";
import {motion} from 'framer-motion';

const iconvariants = (duration) => ({
    initial: { y:10 },
    animate: { y:[10,-10], transition: {duration: duration, ease:"linear", repeat:Infinity, repeatType:"reverse"} }
});

export default function Skills(){
    return(
        <section id="skills" className="h-screen flex items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center">
            <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}} className="mb-16 text-center text-4xl">Tech & Security Skills</motion.h1>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
             className="flex flex-wrap items-center justify-center gap-8 px-4">
                <motion.div 
                variants={iconvariants(2.5)}
                animate="animate"
                initial="initial"
                className="rounded-2xl border-neutral-800 border-4 p-6">
                    <FaJava className="text-6xl text-white" />
                </motion.div>
                <motion.div variants={iconvariants(3)}
                animate="animate"
                initial="initial"
                 className="rounded-2xl border-4 p-6 border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-transparent">
                    <SiHtml5 className="text-6xl text-red-500 bg-white" /></motion.div>
                <motion.div variants={iconvariants(3.9)}
                animate="animate"
                initial="initial"
                 className="rounded-2xl border-neutral-800 border-4 p-6">
                    <SiJavascript className="text-6xl text-yellow-300" />
                </motion.div>
                <motion.div
                variants={iconvariants(7)}
                animate="animate"
                initial="initial" className="rounded-2xl border-neutral-800 border-4 p-6">
                    <RiTailwindCssFill className="text-6xl text-blue-600" />
                </motion.div>
                <motion.div
                variants={iconvariants(5)}
                animate="animate"
                initial="initial" className="rounded-2xl border-neutral-800 border-4 p-6">
                    <RiReactjsFill className="text-6xl text-cyan-500" />
                </motion.div>
                <motion.div 
                variants={iconvariants(3)}
                animate="animate"
                initial="initial" className="rounded-2xl border-neutral-800 border-4 p-6">
                    <FaNodeJs className="text-6xl text-green-500" />
                </motion.div>
                {/* security/tooling icons */}
                <motion.div 
                variants={iconvariants(4)}
                animate="animate"
                initial="initial" className="rounded-2xl border-orange-500 border-4 p-6">
                    <FaShieldAlt className="text-6xl text-orange-400" />
                </motion.div>
                <motion.div 
                variants={iconvariants(4.5)}
                animate="animate"
                initial="initial" className="rounded-2xl border-red-500 border-4 p-6">
                    <FaLock className="text-6xl text-red-400" />
                </motion.div>
                <motion.div 
                variants={iconvariants(5)}
                animate="animate"
                initial="initial" className="rounded-2xl border-blue-500 border-4 p-6">
                    <FaNetworkWired className="text-6xl text-blue-400" />
                </motion.div>
                </motion.div>
        </div>
    </section>);
}