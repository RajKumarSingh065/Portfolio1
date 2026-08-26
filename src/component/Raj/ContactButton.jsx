export default function ContactButton() {
  return (
    <a
      href="#contact"
      className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-caption sm:text-sm md:text-base font-semibold uppercase tracking-widest text-brand-teal-deep transition-transform duration-200 hover:-translate-y-0.5"
      style={{
        background: 'linear-gradient(135deg, #00ed64 0%, #00b545 55%, #008c34 100%)',
        boxShadow: '0 12px 32px rgba(77, 124, 255, 0.28)',
      }}
    >
      Contact me
    </a>
  );
}
