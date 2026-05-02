"use client";

import { motion } from "framer-motion";

const badges = [
  { id: "informed", title: "Informed Citizen", icon: "📖", description: "Explored the election guide" },
  { id: "registered", title: "Registered Voter", icon: "🗳️", description: "Completed registration check" },
  { id: "first-vote", title: "First-Time Voter", icon: "🎉", description: "Ready for your first election" },
  { id: "advocate", title: "Democracy Advocate", icon: "📢", description: "Shared with friends & family" },
  { id: "prepared", title: "Fully Prepared", icon: "✅", description: "Documents ready, booth located" },
  { id: "consistent", title: "Every Vote Counts", icon: "⭐", description: "Voted in every election" },
];

interface VoterBadgesProps {
  earnedBadgeIds?: string[];
  className?: string;
}

export function VoterBadges({ earnedBadgeIds = ["informed"], className }: VoterBadgesProps) {
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Your Voter Journey</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {badges.map((badge, i) => {
          const isEarned = earnedBadgeIds.includes(badge.id);

          return (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
              className={`p-4 rounded-2xl text-center transition-all ${
                isEarned
                  ? "bg-white border-2 border-[var(--color-primary)]/20 shadow-sm"
                  : "bg-[var(--color-surface)] border border-[var(--cafe-border)] opacity-50 grayscale"
              }`}
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <p className="text-xs font-semibold text-[var(--color-primary)] leading-tight">{badge.title}</p>
              <p className="text-[10px] text-[var(--color-text)] opacity-60 mt-1 leading-tight">{badge.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
