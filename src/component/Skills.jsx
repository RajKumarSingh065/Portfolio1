import { motion } from "framer-motion";
import { FiCpu, FiDatabase, FiEye, FiLock, FiServer, FiZap } from "react-icons/fi";
import { SKILL_MODULES } from "../constants/index";

const icons = [FiLock, FiEye, FiZap, FiDatabase, FiCpu, FiServer];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-kicker">03 / Skills</div>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="section-heading">Capability modules, not decorative meters.</h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-zinc-400">
            A practical defensive stack organized around alert triage, log analysis, vulnerability assessment,
            IAM controls, endpoint monitoring, secure development, and network visibility.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {SKILL_MODULES.map((skill, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={skill.title}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 24 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.04, duration: 0.45 }}
                className="capability-panel"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center border border-[#4D7CFF]/25 bg-black/40 text-[#4D7CFF]">
                    <Icon />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                      module {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-white">{skill.title}</h3>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span key={`${skill.title}-${tool}`} className="tech-chip">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
