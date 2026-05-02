"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { faqData } from "@/data/electionData";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(faqData.map((f) => f.category)))];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 120 } },
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = faqData.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <p className="text-sm font-medium text-[var(--color-primary)] mb-2 uppercase tracking-wider">Knowledge</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4 tracking-tight">FAQ & Knowledge Base</h1>
        <p className="text-lg text-[var(--color-text)] opacity-80 max-w-2xl">Find answers to common questions about Indian elections.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6">
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text)] opacity-40" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-[var(--cafe-border)] rounded-2xl text-lg bg-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
          />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setExpandedId(null); }}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200",
              activeCategory === cat
                ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20"
                : "bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)]/80"
            )}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {filtered.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 cafe-card">
          <p className="text-xl text-[var(--color-text)] opacity-60">No results found for your search.</p>
          <p className="text-sm mt-2 text-[var(--color-text)] opacity-40">Try a different search term or browse all categories.</p>
        </motion.div>
      ) : (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-3">
          {filtered.map((faq, i) => (
            <motion.div key={i} variants={itemVariants} className="cafe-card overflow-hidden">
              <button
                onClick={() => setExpandedId(expandedId === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--color-secondary)]/30 transition-colors"
              >
                <div>
                  <span className="inline-block bg-[var(--color-secondary)] text-[var(--color-primary)] text-xs font-semibold px-3 py-1 rounded-full mb-2">{faq.category}</span>
                  <h3 className="font-semibold text-[var(--color-primary)]">{faq.question}</h3>
                </div>
                <span className="text-[var(--color-text)] opacity-40 ml-4 flex-shrink-0">
                  {expandedId === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>
              <AnimatePresence>
                {expandedId === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-[var(--color-surface)] border-t border-[var(--cafe-border)]">
                      <p className="text-[var(--color-text)] opacity-80 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
