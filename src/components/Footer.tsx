export default function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--cafe-border)] mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center text-[var(--color-text)] opacity-80 text-sm flex flex-col items-center gap-2">
          <p className="font-semibold text-[var(--color-primary)] text-base">ElectionGuide India</p>
          <p className="max-w-md">An independent informational resource built to help citizens navigate the electoral process with ease and confidence.</p>
          <div className="h-px w-24 bg-[var(--cafe-border)] my-2 rounded-full" />
          <p className="text-xs mt-1">
            Not affiliated with the Election Commission of India. For official information, please visit <a href="https://eci.gov.in" className="text-[var(--color-primary)] font-semibold hover:underline transition-all" target="_blank" rel="noopener noreferrer">eci.gov.in</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
