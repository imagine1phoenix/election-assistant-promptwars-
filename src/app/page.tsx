"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FileSignature,
  CalendarDays,
  Route,
  MessageCircleQuestion,
  ClipboardCheck,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { ElectionCountdown } from "@/components/ui/ElectionCountdown";
import { ConstituencyFinder } from "@/components/ui/ConstituencyFinder";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { VoterBadges } from "@/components/ui/VoterBadges";

const features = [
  {
    href: "/register",
    icon: <FileSignature className="text-[var(--color-primary)] w-8 h-8" />,
    title: "Voter Registration",
    description:
      "Learn how to register, transfer, or correct your voter details. Know which forms to fill and documents needed.",
  },
  {
    href: "/timeline",
    icon: <CalendarDays className="text-[var(--color-primary)] w-8 h-8" />,
    title: "Election Timeline",
    description:
      "Follow the complete election process from announcement to results with our interactive timeline.",
  },
  {
    href: "/wizard",
    icon: <Route className="text-[var(--color-primary)] w-8 h-8" />,
    title: "Step-by-Step Wizard",
    description:
      "Get personalized guidance based on your situation - first-time voter, moved states, or updating details.",
  },
  {
    href: "/faq",
    icon: <MessageCircleQuestion className="text-[var(--color-primary)] w-8 h-8" />,
    title: "FAQ & Knowledge Base",
    description:
      "Find answers to common questions about EVMs, NOTA, proxy voting, postal ballots, and more.",
  },
  {
    href: "/requirements",
    icon: <ClipboardCheck className="text-[var(--color-primary)] w-8 h-8" />,
    title: "ID & Requirements",
    description:
      "Check what documents and IDs you need based on your state and voter status.",
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
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, 80]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="py-8 md:py-16 relative">
      {/* === ANIMATED HERO === */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="text-center mb-20 md:mb-28 relative z-10"
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

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-[var(--color-primary)] mb-8 leading-tight tracking-tight max-w-4xl mx-auto"
        >
          Navigate Indian Elections with Ease
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-lg md:text-xl text-[var(--color-text)] max-w-2xl mx-auto font-medium leading-relaxed mb-12 opacity-80"
        >
          Understand the election process, register to vote, and participate in democracy.
          Interactive, friendly guidance for every citizen.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/wizard"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-medium text-lg hover:bg-[var(--color-primary)]/90 transition-all shadow-[0_4px_15px_rgba(93,68,50,0.3)] hover:-translate-y-0.5 active:scale-95"
          >
            <span>Start the Wizard</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] border border-[var(--cafe-border)] rounded-full font-medium text-lg hover:bg-[var(--color-secondary)] transition-all active:scale-95"
          >
            Registration Guide
          </Link>
        </motion.div>
      </motion.div>

      {/* === ELECTION COUNTDOWN === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <ElectionCountdown
          electionDate="2027-05-01T07:00:00+05:30"
          label="Next General Election (Estimated)"
        />
      </motion.div>

      {/* === FEATURE GRID === */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 relative z-10"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={feature.href}
            variants={itemVariants}
            className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}
          >
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
                <p className="text-[var(--color-text)] leading-relaxed opacity-80 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* === CONSTITUENCY FINDER === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <ConstituencyFinder />
      </motion.div>

      {/* === DEMOCRACY IN NUMBERS === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="cafe-card p-10 md:p-12 text-center relative overflow-hidden mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12 relative z-10 tracking-tight">
          Democracy in Numbers
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {[
            { stat: "18+", label: "Minimum voting age" },
            { stat: "968M+", label: "Registered voters (2024)" },
            { stat: "543", label: "Lok Sabha constituencies" },
            { stat: "10.5L+", label: "Polling stations" },
          ].map((item) => (
            <div
              key={item.stat}
              className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--cafe-border)]"
            >
              <p className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-2">
                {item.stat}
              </p>
              <p className="text-[var(--color-text)] font-medium opacity-80 text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* === QUICK LINKS (ECI / NVSP) === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-6 mb-20"
      >
        <a
          href="https://voters.eci.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="cafe-card-interactive p-8 group"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold text-[var(--india-saffron)] uppercase tracking-wider mb-2">
                Official Portal
              </p>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                National Voter Service Portal
              </h3>
              <p className="text-[var(--color-text)] opacity-70 text-sm">
                Register online, check your name on the electoral roll, download your e-EPIC, and
                track your application status.
              </p>
            </div>
            <ExternalLink
              size={20}
              className="text-[var(--color-primary)] opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
            />
          </div>
        </a>
        <a
          href="https://eci.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="cafe-card-interactive p-8 group"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold text-[var(--india-green)] uppercase tracking-wider mb-2">
                Official Website
              </p>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                Election Commission of India
              </h3>
              <p className="text-[var(--color-text)] opacity-70 text-sm">
                Official schedules, press releases, candidate affidavits, and election results from
                the constitutional body.
              </p>
            </div>
            <ExternalLink
              size={20}
              className="text-[var(--color-primary)] opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
            />
          </div>
        </a>
      </motion.div>

      {/* === VOTER BADGES + SHARING === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-8 mb-16"
      >
        <div className="cafe-card p-8">
          <VoterBadges earnedBadgeIds={["informed"]} />
        </div>
        <div className="cafe-card p-8 flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
              Help Others Vote
            </h3>
            <p className="text-[var(--color-text)] opacity-70 text-sm leading-relaxed">
              Democracy grows stronger when more citizens participate. Share this guide with your
              friends, family, and community.
            </p>
          </div>
          <ShareButtons />
        </div>
      </motion.div>
    </div>
  );
}
