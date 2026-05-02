"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  badge?: string;
  href?: string;
  action?: { label: string; href: string };
  className?: string;
}

export function Card({ title, description, icon, badge, href, action, className }: CardProps) {
  const content = (
    <motion.article
      className={cn("cafe-card overflow-hidden group relative", className)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-[var(--india-saffron)] text-white text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </span>
        </div>
      )}

      <div className="p-6">
        {icon && (
          <div className="bg-[var(--color-secondary)] w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
            {icon}
          </div>
        )}

        <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
          {title}
        </h3>
        <p className="text-[var(--color-text)] opacity-80 text-sm leading-relaxed">
          {description}
        </p>

        {action && (
          <Link
            href={action.href}
            className="inline-flex items-center gap-1.5 mt-4 text-[var(--color-primary)] font-semibold text-sm hover:gap-3 transition-all"
          >
            {action.label}
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </motion.article>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
