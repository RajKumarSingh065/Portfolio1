export default function ContactButton() {
  return (
    <a
      href="#contact"
      className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest text-[#0E131B] transition-transform duration-200 hover:-translate-y-0.5"
      style={{
        background: 'linear-gradient(135deg, #6D92FF 0%, #4D7CFF 55%, #2B50D8 100%)',
        boxShadow: '0 12px 32px rgba(77, 124, 255, 0.28)',
      }}
    >
      Contact me
    </a>
  );
}
