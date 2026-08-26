import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiCheckCircle } from "react-icons/fi";
import { CERTIFICATIONS, EDUCATION, EXPERIENCE } from "../constants/index";

export default function SocialProof() {
  return (
    <section id="research" className="section-shell">
      <div className="section-kicker">04 / Experience + Research</div>
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <h2 className="section-heading">Analyst experience, research, certifications, and labs.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Certifications", CERTIFICATIONS.join(" / ")],
              ["Education", `${EDUCATION.degree}, ${EDUCATION.school}, ${EDUCATION.location}. GPA ${EDUCATION.gpa}. ${EDUCATION.period}.`],
            ].map(([title, body], index) => (
              <motion.div
                key={title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                className="glass-panel p-6"
              >
                {index === 0 ? <FiAward className="text-brand-green" /> : <FiBookOpen className="text-brand-green" />}
                <h3 className="mt-5 text-xl font-black uppercase text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((item, index) => (
            <motion.article
              key={item.title}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 28 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="timeline-item"
            >
              <span className="timeline-dot" />
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-caption text-brand-green">{item.period}</span>
                <span className="border border-white/10 px-2 py-1 font-mono text-micro-uppercase uppercase tracking-[0.18em] text-zinc-500">
                  {item.type}
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-black uppercase text-white">{item.title}</h3>
              <p className="mt-2 font-mono text-caption uppercase tracking-[0.16em] text-zinc-500">{item.organization}</p>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{item.detail}</p>
              <p className="mt-5 flex items-center gap-2 font-mono text-caption text-zinc-500">
                <FiCheckCircle className="text-brand-green" />
                evidence logged
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
