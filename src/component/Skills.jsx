import { RiReactjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {motion} from 'framer-motion';

const iconvariants = (duration) => ({
    initial: { y:10 },
    animate: { y:[10,-10], transition: {duration: duration, ease:"linear", repeat:Infinity, repeatType:"reverse"} }
});

export default function Skills(){
    return(
        <section id="skills"  className="py-5">
        <div id="skills" className="border-b border-neutral-800 pb-24">
            <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}} className="my-20 text-center text-4xl">Skills</motion.h1>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
             className="flex flex-wrap item-center justify-center gap-6">
                <motion.div 
                variants={iconvariants(2.5)}
                animate="animate"
                initial="initial"
                className="rounded-2xl border-neutral-800 border-4 p-4">
                    <FaJava className="text-4xl text-white" />
                </motion.div>
                <motion.div variants={iconvariants(3)}
                animate="animate"
                initial="initial"
                 className="rounded-2xl border-neutral-800 border-4 p-4">
                    <SiHtml5 className="text-4xl text-red-500 bg-white" /></motion.div>
                <motion.div variants={iconvariants(3.9)}
                animate="animate"
                initial="initial"
                 className="rounded-2xl border-neutral-800 border-4 p-4">
                    <SiJavascript className="text-4xl text-yellow-300" />
                </motion.div>
                <motion.div
                variants={iconvariants(7)}
                animate="animate"
                initial="initial" className="rounded-2xl border-neutral-800 border-4 p-4">
                    <RiTailwindCssFill className="text-4xl text-blue-600" />
                </motion.div>
                <motion.div
                variants={iconvariants(5)}
                animate="animate"
                initial="initial" className="rounded-2xl border-neutral-800 border-4 p-4">
                    <RiReactjsFill className="text-4xl text-cyan-500" />
                </motion.div>
                <motion.div 
                variants={iconvariants(3)}
                animate="animate"
                initial="initial" className="rounded-2xl border-neutral-800 border-4 p-4">
                    <FaNodeJs className="text-4xl text-green-500" />
                </motion.div>
            </motion.div>

        </div>
    </section>);
}