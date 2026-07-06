import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload, FiShield } from "react-icons/fi";
import { RESUME } from "../constants/index";

const analystStats = [
  ["Role", "Security Analyst Intern"],
  ["Focus", "SIEM / Threat Hunting"],
  ["Lab", "SOC + IR Automation"],
];

function ThreatMap() {
  const nodes = [
    [17, 39],
    [31, 30],
    [43, 46],
    [58, 34],
    [72, 48],
    [82, 32],
    [66, 64],
  ];

  return (
    <div className="holo-panel relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden">
      <div className="absolute inset-6 border border-[#4D7CFF]/20" />
      <div className="radar-sweep absolute inset-8 rounded-full border border-[#4D7CFF]/25" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" role="img" aria-label="Animated cyber threat map">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M12 48 C22 28, 39 24, 52 36 S76 30, 88 47 C75 61, 65 69, 47 65 S22 66, 12 48Z"
          className="map-shape"
        />
        {nodes.map(([x1, y1], index) =>
          nodes.slice(index + 1, index + 3).map(([x2, y2], lineIndex) => (
            <line
              key={`${index}-${lineIndex}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className="map-line"
            />
          ))
        )}
        {nodes.map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`} filter="url(#glow)">
            <circle cx={cx} cy={cy} r="1.4" className="map-node" style={{ animationDelay: `${index * 0.35}s` }} />
            <circle cx={cx} cy={cy} r="5" className="map-pulse" style={{ animationDelay: `${index * 0.35}s` }} />
          </g>
        ))}
        <path d="M50 18 L69 28 L66 52 C64 64 57 72 50 77 C43 72 36 64 34 52 L31 28 Z" className="shield-mark" />
      </svg>

      <div className="absolute bottom-6 right-6 flex items-center gap-2 border border-[#4D7CFF]/30 bg-black/45 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#4D7CFF]">
        <FiShield />
        monitoring
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-[#4D7CFF]">
            Security Analyst Portfolio
          </p>
          <h1 className="brutal-heading text-5xl font-black uppercase leading-[0.94] text-white sm:text-6xl lg:text-7xl">
            Building calmer, sharper security operations.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            I work across SIEM operations, threat hunting, incident response, infrastructure defense, and
            application hardening.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/projects/" className="neon-button">
              View Projects
              <FiArrowUpRight />
            </a>
            <a
              href={RESUME.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-button"
            >
              Download Resume
              <FiDownload />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <ThreatMap />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
        className="mx-auto mt-10 grid w-full max-w-7xl gap-3 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {analystStats.map(([label, value]) => (
            <div key={label} className="home-stat-panel">
              <p>{label}</p>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

        <article className="home-feature-panel">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#4D7CFF]">featured project</p>
            <h2 className="mt-3 text-2xl font-black uppercase leading-none text-white">Enterprise SOC & Incident Response Lab</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Containerized Wazuh SIEM cluster with Sysmon endpoint telemetry, automated Active Response, and
              VirusTotal IOC enrichment to reduce manual triage time by roughly 90%.
            </p>
          </div>
          <a href="/projects/" className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#4D7CFF]">
            view project <FiArrowUpRight />
          </a>
        </article>
      </motion.div>
    </section>
  );
}
