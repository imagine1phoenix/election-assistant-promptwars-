"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, FileSearch, Megaphone, Vote, BarChart3, Flag, ChevronDown, ChevronUp, Info } from "lucide-react";
import { timelineData } from "@/data/electionData";
import { cn } from "@/lib/utils";

const phaseIcons = [Bell, FileSearch, Megaphone, Vote, BarChart3, Flag];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
};

export default function TimelinePage() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-sm font-medium text-[var(--color-primary)] mb-2 uppercase tracking-wider">Process</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4 tracking-tight">Election Timeline</h1>
        <p className="text-lg text-[var(--color-text)] opacity-80 max-w-2xl">Follow the complete election process from announcement to government formation.</p>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative mb-14">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[var(--color-secondary)]" />

        <div className="space-y-6">
          {timelineData.map((phase, i) => {
            const Icon = phaseIcons[i];
            return (
              <motion.div key={phase.phase} variants={itemVariants} className="relative flex gap-4 md:gap-8">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center z-10 ring-4 ring-white shadow-sm">
                  <Icon size={22} />
                </div>
                <div className="flex-1 pb-2">
                  <button
                    onClick={() => setExpandedPhase(expandedPhase === i ? null : i)}
                    aria-expanded={expandedPhase === i}
                    aria-controls={`timeline-phase-${i}`}
                    id={`timeline-btn-${i}`}
                    className="w-full text-left cafe-card-interactive p-5 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">Phase {phase.phase}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--color-primary)]">{phase.title}</h3>
                        <p className="text-[var(--color-text)] opacity-60 text-sm mt-0.5">{phase.description}</p>
                      </div>
                      <span className="text-[var(--color-text)] opacity-40 ml-4 flex-shrink-0 group-hover:opacity-70 transition-opacity">
                        {expandedPhase === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedPhase === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div id={`timeline-phase-${i}`} role="region" aria-labelledby={`timeline-btn-${i}`} className="mt-3 cafe-card p-6">
                          <div className="space-y-5">
                            {phase.steps.map((step, si) => (
                              <div key={si} className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-sm font-semibold text-[var(--color-primary)]">
                                  {si + 1}
                                </div>
                                <div className="pt-1">
                                  <h4 className="font-semibold text-[var(--color-primary)]">{step.step}</h4>
                                  <p className="text-[var(--color-text)] opacity-70 text-sm mt-0.5">{step.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={cn("cafe-card p-6 border-l-4 border-l-green-500")}>
        <div className="flex items-start gap-3">
          <Info size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-[var(--color-primary)] mb-1">Did you know?</h3>
            <p className="text-[var(--color-text)] opacity-80 text-sm">The 2024 Lok Sabha elections were held in 7 phases across 6 weeks, making it one of the largest democratic exercises in the world with over 968 million eligible voters.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
