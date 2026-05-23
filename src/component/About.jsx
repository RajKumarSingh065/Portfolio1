import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-kicker">01 / About</div>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.article
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-7 sm:p-9"
        >
          <h2 className="section-heading">Security analyst with builder instincts.</h2>
          <p className="mt-6 text-base leading-8 text-zinc-300">
            I am a cybersecurity student and Security Analyst Intern with a foundation in secure software
            development, infrastructure defense, SIEM deployment, threat intelligence automation, and vulnerability
            assessment. My work connects offensive testing with defensive remediation, with a growing focus on
            blockchain security and application hardening.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Threat Hunting", "SIEM Operations", "48h CVE Closure"].map((item) => (
              <div key={item} className="border border-white/10 bg-white/[0.03] p-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#7CFF00]">capability</span>
                <p className="mt-2 text-sm font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.aside
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="terminal-panel"
        >
          <div className="terminal-bar">
            <span />
            <span />
            <span />
            <p>mission.txt</p>
          </div>
          <div className="space-y-5 p-6 font-mono text-sm leading-7 text-zinc-300">
            <p><span className="text-[#7CFF00]">$</span> cat mission.txt</p>
            <p>
              Deploy defensive telemetry. Hunt for risky behavior. Enrich indicators. Close critical exposure
              quickly. Build secure software with access control, privacy safeguards, and hardened infrastructure.
            </p>
            <p><span className="text-[#7CFF00]">$</span> status --profile</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <code>identity: security_analyst</code>
              <code>mode: threat_hunting</code>
              <code>stack: wazuh/splunk/sysmon</code>
              <code>focus: app_hardening</code>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
