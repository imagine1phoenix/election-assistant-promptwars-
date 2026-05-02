"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accessibility, Type, Contrast, Zap, X } from "lucide-react";

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", String(fontSize));
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [highContrast]);

  useEffect(() => {
    if (reduceMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  }, [reduceMotion]);

  const fontSizes = [
    { value: 1, label: "100%" },
    { value: 1.25, label: "125%" },
    { value: 1.5, label: "150%" },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-3 bg-white border border-[var(--cafe-border)] rounded-2xl shadow-xl p-5 w-72"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[var(--color-primary)]">Accessibility</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-text)] opacity-40 hover:opacity-80 transition-opacity"
                aria-label="Close accessibility menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Font Size */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2.5">
                <Type size={16} className="text-[var(--color-primary)]" />
                <span className="text-sm font-medium text-[var(--color-text)]">Font Size</span>
              </div>
              <div className="flex gap-2">
                {fontSizes.map((fs) => (
                  <button
                    key={fs.value}
                    onClick={() => setFontSize(fs.value)}
                    className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${
                      fontSize === fs.value
                        ? "bg-[var(--color-primary)] text-white"
                        : "bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)]/80"
                    }`}
                    aria-label={`Set font size to ${fs.label}`}
                  >
                    {fs.label}
                  </button>
                ))}
              </div>
            </div>

            {/* High Contrast */}
            <div className="mb-4">
              <button
                onClick={() => setHighContrast(!highContrast)}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-[var(--color-surface)] hover:bg-[var(--color-secondary)] transition-colors"
                aria-pressed={highContrast}
              >
                <div className="flex items-center gap-2">
                  <Contrast size={16} className="text-[var(--color-primary)]" />
                  <span className="text-sm font-medium text-[var(--color-text)]">High Contrast</span>
                </div>
                <div
                  className={`w-10 h-6 rounded-full transition-colors ${
                    highContrast ? "bg-[var(--color-primary)]" : "bg-gray-300"
                  } relative`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                      highContrast ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Reduce Motion */}
            <div>
              <button
                onClick={() => setReduceMotion(!reduceMotion)}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-[var(--color-surface)] hover:bg-[var(--color-secondary)] transition-colors"
                aria-pressed={reduceMotion}
              >
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-[var(--color-primary)]" />
                  <span className="text-sm font-medium text-[var(--color-text)]">Reduce Motion</span>
                </div>
                <div
                  className={`w-10 h-6 rounded-full transition-colors ${
                    reduceMotion ? "bg-[var(--color-primary)]" : "bg-gray-300"
                  } relative`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                      reduceMotion ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30 flex items-center justify-center hover:bg-[var(--color-primary)]/90 transition-colors"
        aria-label="Accessibility Options"
        aria-expanded={isOpen}
      >
        <Accessibility size={24} />
      </motion.button>
    </div>
  );
}
