"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface ElectionCountdownProps {
  /** Target election date in ISO format */
  electionDate: string;
  /** Election name or label */
  label?: string;
}

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const target = new Date(targetDate).getTime();
      const now = Date.now();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] tabular-nums"
      >
        {String(value).padStart(2, "0")}
      </motion.div>
      <span className="text-xs md:text-sm text-[var(--color-text)] opacity-60 mt-1 uppercase tracking-wider font-medium">
        {label}
      </span>
    </div>
  );
}

export function ElectionCountdown({ electionDate, label = "Next Election In" }: ElectionCountdownProps) {
  const timeLeft = useCountdown(electionDate);

  return (
    <div className="cafe-card p-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-5">
        <Clock size={20} className="text-[var(--color-primary)]" />
        <h3 className="text-lg font-semibold text-[var(--color-primary)]">{label}</h3>
      </div>

      <div className="flex items-center justify-center gap-6 md:gap-10">
        <CountdownUnit value={timeLeft.days} label="Days" />
        <span className="text-2xl text-[var(--color-primary)] opacity-30 font-light">:</span>
        <CountdownUnit value={timeLeft.hours} label="Hours" />
        <span className="text-2xl text-[var(--color-primary)] opacity-30 font-light">:</span>
        <CountdownUnit value={timeLeft.minutes} label="Min" />
        <span className="text-2xl text-[var(--color-primary)] opacity-30 font-light">:</span>
        <CountdownUnit value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
}
