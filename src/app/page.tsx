"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileSignature, CalendarDays, Route, MessageCircleQuestion, ClipboardCheck, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    href: "/register",
    icon: <FileSignature className="text-[var(--color-primary)] w-8 h-8" />,
    title: "Voter Registration",
    description: "Learn how to register, transfer, or correct your voter details. Know which forms to fill and documents needed.",
  },
  {
    href: "/timeline",
    icon: <CalendarDays className="text-[var(--color-primary)] w-8 h-8" />,
    title: "Election Timeline",
    description: "Follow the complete election process from announcement to results with our interactive timeline.",
  },
  {
    href: "/wizard",
    icon: <Route className="text-[var(--color-primary)] w-8 h-8" />,
    title: "Step-by-Step Wizard",
    description: "Get personalized guidance based on your situation - first-time voter, moved states, or updating details.",
  },
  {
    href: "/faq",
    icon: <MessageCircleQuestion className="text-[var(--color-primary)] w-8 h-8" />,
    title: "FAQ & Knowledge Base",
    description: "Find answers to common questions about EVMs, NOTA, proxy voting, postal ballots, and more.",
  },
  {
    href: "/requirements",
    icon: <ClipboardCheck className="text-[var(--color-primary)] w-8 h-8" />,
    title: "ID & Requirements",
    description: "Check what documents and IDs you need based on your state and voter status.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
};

export default function Home() {
  return (
    <div className="py-12 md:py-24 relative">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="text-center mb-24 relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] text-sm font-semibold mb-8 border border-[var(--cafe-border)]"
        >
          <Sparkles size={16} />
          <span>Your Cozy Democracy Assistant</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-primary)] mb-8 leading-tight tracking-tight max-w-4xl mx-auto">
          Navigate Indian Elections with Ease
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text)] max-w-2xl mx-auto font-medium leading-relaxed mb-12 opacity-80">
          Understand the election process, register to vote, and participate in democracy.
          Interactive, friendly guidance for every citizen.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/wizard" className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-medium text-lg hover:bg-[var(--color-primary)]/90 transition-all shadow-[0_4px_15px_rgba(93,68,50,0.3)] hover:-translate-y-0.5">
            <span>Start the Wizard</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/register" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] border border-[var(--cafe-border)] rounded-full font-medium text-lg hover:bg-[var(--color-secondary)] transition-all">
            Registration Guide
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28 relative z-10"
      >
        {features.map((feature, idx) => (
          <motion.div key={feature.href} variants={itemVariants} className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
            <Link
              href={feature.href}
              className="block h-full p-8 cafe-card-interactive group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="bg-[var(--color-secondary)] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                  {feature.title}
                </h2>
                <p className="text-[var(--color-text)] leading-relaxed opacity-80 text-sm md:text-base">{feature.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="cafe-card p-12 text-center relative overflow-hidden"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12 relative z-10 tracking-tight">Democracy in Numbers</h2>
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          <div className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--cafe-border)]">
            <p className="text-5xl font-bold text-[var(--color-primary)] mb-3">18+</p>
            <p className="text-[var(--color-text)] font-medium opacity-80">Minimum voting age</p>
          </div>
          <div className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--cafe-border)]">
            <p className="text-5xl font-bold text-[var(--color-primary)] mb-3">968M+</p>
            <p className="text-[var(--color-text)] font-medium opacity-80">Registered voters (2024)</p>
          </div>
          <div className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--cafe-border)]">
            <p className="text-5xl font-bold text-[var(--color-primary)] mb-3">543</p>
            <p className="text-[var(--color-text)] font-medium opacity-80">Lok Sabha constituencies</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
