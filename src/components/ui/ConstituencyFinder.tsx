"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, Building2, Phone, Mail, ExternalLink } from "lucide-react";
import { constituencies } from "@/data/constituencies";

export function ConstituencyFinder() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof constituencies>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;
    const q = query.trim().toLowerCase();
    const matches = constituencies.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        c.pinCodes.some((p) => p.startsWith(q))
    );
    setResults(matches);
    setSearched(true);
  };

  return (
    <div className="cafe-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-[var(--color-secondary)] w-11 h-11 rounded-xl flex items-center justify-center">
          <MapPin size={20} className="text-[var(--color-primary)]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-primary)]">Find Your Constituency</h3>
          <p className="text-sm text-[var(--color-text)] opacity-60">Search by PIN code, city, or state name</p>
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text)] opacity-40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Enter PIN code, city, or state..."
            className="w-full pl-11 pr-4 py-3.5 border-2 border-[var(--cafe-border)] rounded-2xl bg-white text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            aria-label="Search constituency"
          />
        </div>
        <button
          onClick={handleSearch}
          className="px-6 py-3.5 bg-[var(--color-primary)] text-white rounded-2xl font-semibold hover:bg-[var(--color-primary)]/90 transition-colors active:scale-95"
        >
          Search
        </button>
      </div>

      <AnimatePresence mode="wait">
        {searched && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {results.length === 0 ? (
              <div className="text-center py-8 text-[var(--color-text)] opacity-50">
                <MapPin size={32} className="mx-auto mb-3 opacity-30" />
                <p>No matching constituencies found. Try a different search term.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {results.map((c) => (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[var(--color-surface)] border border-[var(--cafe-border)] rounded-xl p-5"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-[var(--color-primary)] text-lg">{c.name}</h4>
                        <p className="text-sm text-[var(--color-text)] opacity-60">{c.state} • {c.type}</p>
                      </div>
                      <span className="bg-[var(--color-secondary)] text-[var(--color-primary)] text-xs font-bold px-3 py-1 rounded-full">
                        {c.id}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Building2 size={14} className="text-[var(--color-primary)] opacity-60" />
                          <span className="text-[var(--color-text)] opacity-80">Booths: {c.booths.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-[var(--color-primary)] opacity-60" />
                          <span className="text-[var(--color-text)] opacity-80">Electors: {c.electors.toLocaleString()}</span>
                        </div>
                      </div>

                      {c.electoralOfficer && (
                        <div className="space-y-2">
                          <p className="font-medium text-[var(--color-primary)] text-xs uppercase tracking-wider">Electoral Officer</p>
                          <div className="flex items-center gap-2">
                            <Phone size={14} className="text-[var(--color-primary)] opacity-60" />
                            <span className="text-[var(--color-text)] opacity-80">{c.electoralOfficer.phone}</span>
                          </div>
                          {c.electoralOfficer.email && (
                            <div className="flex items-center gap-2">
                              <Mail size={14} className="text-[var(--color-primary)] opacity-60" />
                              <span className="text-[var(--color-text)] opacity-80">{c.electoralOfficer.email}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <a
                      href="https://voters.eci.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-[var(--color-primary)] font-semibold text-sm hover:underline"
                    >
                      Check voter list on NVSP <ExternalLink size={12} />
                    </a>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
