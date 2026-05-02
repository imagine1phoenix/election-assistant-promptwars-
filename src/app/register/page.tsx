"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, UserPlus, Trash2, Pencil, MoveRight, CheckCircle2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const forms = [
  {
    form: "Form 6",
    title: "New Voter Registration",
    description: "For first-time voters or those shifting to a new constituency",
    icon: UserPlus,
    eligible: "Citizens aged 18+ who are not on the electoral roll",
    documents: ["Proof of age (birth certificate, school certificate, Aadhaar)", "Proof of address (utility bill, bank statement, passport)"],
    process: ["Visit voters.eci.gov.in or download Voter Helpline app", "Fill Form 6 with personal details", "Upload documents", "Submit and note application reference number", "BLO will verify and you will receive your Voter ID"],
  },
  {
    form: "Form 7",
    title: "Deletion of Name",
    description: "To remove a name from the electoral roll (death, shift, etc.)",
    icon: Trash2,
    eligible: "Any person wanting to remove a name from the roll",
    documents: ["Proof of death or proof of relocation", "Applicant identity proof"],
    process: ["Visit ERO office or use online portal", "Fill Form 7 with reason for deletion", "Submit with supporting documents", "ERO will verify and process"],
  },
  {
    form: "Form 8",
    title: "Correction of Details",
    description: "To correct errors in voter ID (name, photo, address, DOB)",
    icon: Pencil,
    eligible: "Registered voters with incorrect details on their EPIC",
    documents: ["Proof of correct information", "Current Voter ID card"],
    process: ["Visit voters.eci.gov.in", "Fill Form 8 with corrected details", "Upload supporting documents", "Submit and track application status", "Collect corrected Voter ID when ready"],
  },
  {
    form: "Form 8B",
    title: "Transposition of Entry",
    description: "To shift your voter registration within the same constituency",
    icon: MoveRight,
    eligible: "Voters who have moved within the same constituency",
    documents: ["Proof of new address", "Current Voter ID"],
    process: ["Fill Form 8B online or at ERO office", "Provide proof of new address", "Submit application", "Wait for BLO verification", "Receive updated Voter ID"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
};

export default function RegisterPage() {
  const [selectedForm, setSelectedForm] = useState<number | null>(null);
  const [checks, setChecks] = useState<Record<string, boolean>>({});

  const eligibilityItems = [
    "You are a citizen of India",
    "You are 18 years or older on 1st January of the qualifying year",
    "You are ordinarily resident in the constituency where you want to register",
    "You are not disqualified under any law (e.g., unsound mind, criminal conviction)",
  ];

  const toggleCheck = (item: string) => {
    setChecks((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <p className="text-sm font-medium text-[var(--color-primary)] mb-2 uppercase tracking-wider">Getting Started</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4 tracking-tight">Voter Registration Guide</h1>
        <p className="text-lg text-[var(--color-text)] opacity-80 max-w-2xl">Everything you need to know about registering, updating, or managing your voter details in India.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="cafe-card p-5 mb-12 border-l-4 border-l-amber-500">
        <p className="text-[var(--color-text)] font-medium">Important: You can register online at <a href="https://voters.eci.gov.in" className="text-[var(--color-primary)] font-semibold hover:underline" target="_blank" rel="noopener noreferrer">voters.eci.gov.in</a> <ExternalLink size={14} className="inline ml-1" /> or visit your nearest Electoral Registration Officer (ERO) office.</p>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-3 mb-14">
        {forms.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div key={f.form} variants={itemVariants} className="cafe-card overflow-hidden">
              <button
                onClick={() => setSelectedForm(selectedForm === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--color-secondary)]/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[var(--color-secondary)] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="bg-[var(--color-primary)] text-white font-semibold px-3 py-1 rounded-full text-xs">{f.form}</span>
                      <h3 className="font-semibold text-lg text-[var(--color-primary)]">{f.title}</h3>
                    </div>
                    <p className="text-[var(--color-text)] opacity-70 mt-0.5">{f.description}</p>
                  </div>
                </div>
                <span className="text-[var(--color-text)] opacity-40 ml-4 flex-shrink-0">
                  {selectedForm === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {selectedForm === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-[var(--color-surface)] border-t border-[var(--cafe-border)]">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-3 text-[var(--color-primary)]">Who is eligible?</h4>
                          <p className="text-[var(--color-text)] opacity-80 mb-5">{f.eligible}</p>
                          <h4 className="font-semibold mb-3 text-[var(--color-primary)]">Documents needed:</h4>
                          <ul className="space-y-2">
                            {f.documents.map((d) => (
                              <li key={d} className="flex items-start gap-2 text-[var(--color-text)] opacity-80">
                                <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-[var(--color-primary)]">Process:</h4>
                          <ol className="space-y-3">
                            {f.process.map((p, pi) => (
                              <li key={p} className="flex items-start gap-3 text-[var(--color-text)] opacity-80">
                                <span className="bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">{pi + 1}</span>
                                <span>{p}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="cafe-card p-8">
        <h2 className="text-xl font-bold text-[var(--color-primary)] mb-5">Eligibility Checklist</h2>
        <div className="space-y-3">
          {eligibilityItems.map((item) => (
            <label key={item} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={!!checks[item]}
                onChange={() => toggleCheck(item)}
                aria-label={`Mark ${item} as completed`}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
              />
              <span className={cn("text-[var(--color-text)] transition-colors", checks[item] ? "opacity-50 line-through" : "opacity-80 group-hover:opacity-100")}>{item}</span>
            </label>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
