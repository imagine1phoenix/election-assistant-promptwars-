import Link from "next/link";

const quickLinks = [
  { href: "/register", label: "Registration Guide" },
  { href: "/timeline", label: "Election Timeline" },
  { href: "/wizard", label: "Step-by-Step Wizard" },
  { href: "/faq", label: "FAQ & Knowledge Base" },
  { href: "/requirements", label: "ID & Requirements" },
];

const officialLinks = [
  { href: "https://eci.gov.in", label: "Election Commission of India" },
  { href: "https://voters.eci.gov.in", label: "National Voter Service Portal" },
  { href: "https://nvsp.in", label: "NVSP" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--cafe-border)] mt-auto relative z-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-bold text-[var(--color-primary)] text-xl mb-3">ElectionGuide India</p>
            <p className="text-[var(--color-text)] opacity-70 text-sm leading-relaxed max-w-sm">
              An independent informational resource built to help citizens navigate the electoral
              process with ease and confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-[var(--color-primary)] text-sm uppercase tracking-wider mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-text)] opacity-70 hover:opacity-100 hover:text-[var(--color-primary)] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Resources */}
          <div>
            <p className="font-semibold text-[var(--color-primary)] text-sm uppercase tracking-wider mb-4">
              Official Resources
            </p>
            <ul className="space-y-2.5">
              {officialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text)] opacity-70 hover:opacity-100 hover:text-[var(--color-primary)] text-sm transition-colors"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--cafe-border)] mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text)] opacity-50">
          <p>
            Not affiliated with the Election Commission of India. For official information, visit{" "}
            <a
              href="https://eci.gov.in"
              className="text-[var(--color-primary)] font-semibold hover:underline transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              eci.gov.in
            </a>
          </p>
          <p>Built with care for Indian democracy</p>
        </div>
      </div>

      {/* India stripe at bottom */}
      <div className="india-stripe" aria-hidden="true" />
    </footer>
  );
}
