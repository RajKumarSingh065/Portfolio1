export default function LiveProjectButton({ href = '#', label = 'GitHub' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-brand-green/50 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-canvas hover:border-brand-green hover:bg-brand-green/10 transition-colors duration-200 cursor-pointer inline-block text-center"
    >
      {label}
    </a>
  );
}
