"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ProgressIndicatorProps {
  current: number;
  total: number;
  labels: string[];
  className?: string;
}

export function ProgressIndicator({ current, total, labels, className }: ProgressIndicatorProps) {
  return (
    <div className={cn("w-full", className)} role="progressbar" aria-valuenow={current + 1} aria-valuemin={1} aria-valuemax={total} aria-label={`Step ${current + 1} of ${total}`}>
      <div className="flex items-center justify-between mb-3">
        {labels.map((label, i) => {
          const isCompleted = i < current;
          const isActive = i === current;

          return (
            <div key={i} className="flex flex-col items-center flex-1 relative">
              {/* Connector line */}
              {i > 0 && (
                <div
                  className={cn(
                    "absolute top-4 -left-1/2 w-full h-0.5 -z-10",
                    isCompleted ? "bg-[var(--color-primary)]" : "bg-[var(--color-secondary)]"
                  )}
                />
              )}

              {/* Step circle */}
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                  isCompleted
                    ? "bg-[var(--color-primary)] text-white"
                    : isActive
                    ? "bg-[var(--color-primary)] text-white ring-4 ring-[var(--color-primary)]/20"
                    : "bg-[var(--color-secondary)] text-[var(--color-primary)]"
                )}
              >
                {isCompleted ? <Check size={14} /> : i + 1}
              </div>

              {/* Label */}
              <span
                className={cn(
                  "text-xs mt-2 text-center leading-tight hidden sm:block",
                  isActive
                    ? "text-[var(--color-primary)] font-semibold"
                    : "text-[var(--color-text)] opacity-60"
                )}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
