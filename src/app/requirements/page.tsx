"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileSignature, MoveRight, Pencil, Vote, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import { indianStates, unionTerritories } from "@/data/electionData";
import { cn } from "@/lib/utils";

const allLocations = [...indianStates, ...unionTerritories].sort();

interface DocChecklist {
  title: string;
  docs: string[];
  notes?: string;
}

function getChecklist(scenario: string, location: string): DocChecklist[] {
  const base: DocChecklist[] = [
    {
      title: "Proof of Age (any one)",
      docs: ["Birth Certificate", "School Leaving Certificate / Marksheet (Class 10)", "Aadhaar Card", "PAN Card", "Passport", "Driving License"],
    },
    {
      title: "Proof of Address (any one)",
      docs: ["Aadhaar Card", "Passport", "Utility Bill (electricity, water, gas) - last 3 months", "Bank/Post Office Passbook with photo", "Ration Card", "Rent Agreement (registered)"],
    },
    {
      title: "Identity Proof for Polling Day (any one)",
      docs: ["Voter ID Card (EPIC)", "Aadhaar Card", "Passport", "Driving License", "PAN Card", "Bank/Post Office Passbook with photo", "MNREGA Job Card", "Official ID card for MPs/MLAs/Ministers", "Digital Voter ID on Voter Helpline App"],
    },
  ];

  if (scenario === "new") {
    return [
      ...base,
      {
        title: "Additional for First-Time Voters",
        docs: ["Passport-size photographs (if applying offline)", "Form 6 filled and signed", "Date of birth proof (mandatory)"],
        notes: "If you are a government employee, you may also need a service certificate.",
      },
    ];
  }

  if (scenario === "transfer") {
    return [
      ...base,
      {
        title: "Additional for Transfer",
        docs: [`Proof of new address in ${location}`, "Current Voter ID card", "Form 6 (if new constituency) or Form 8B (if within same constituency)"],
        notes: "If moving to a different state, you must register fresh in the new constituency using Form 6.",
      },
    ];
  }

  if (scenario === "correction") {
    return [
      ...base,
      {
        title: "Additional for Corrections",
        docs: ["Current Voter ID card", "Form 8 filled", `Document proving correct information (e.g., updated Aadhaar for name change, new utility bill for address update)`],
      },
    ];
  }

  if (scenario === "polling") {
    return [
      {
        title: "For Polling Day",
        docs: ["Any one photo ID from the accepted list", "Know your polling station and serial number in the electoral roll", "Ink mark on finger after voting (applied by polling officer)"],
        notes: "Digital Voter ID downloaded from the Voter Helpline App is also accepted.",
      },
    ];
  }

  return base;
}

const scenarios = [
  { value: "new", label: "New Voter", icon: FileSignature },
  { value: "transfer", label: "Transfer", icon: MoveRight },
  { value: "correction", label: "Correction", icon: Pencil },
  { value: "polling", label: "Polling Day", icon: Vote },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
};

export default function RequirementsPage() {
  const [scenario, setScenario] = useState("");
  const [location, setLocation] = useState("");

  const checklists = scenario ? getChecklist(scenario, location || "your area") : [];

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <p className="text-sm font-medium text-[var(--color-primary)] mb-2 uppercase tracking-wider">Documents</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4 tracking-tight">ID & Requirements</h1>
        <p className="text-lg text-[var(--color-text)] opacity-80 max-w-2xl">Find out exactly what documents you need based on your situation.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
        <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-4">What are you trying to do?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {scenarios.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.value}
                onClick={() => setScenario(s.value)}
                className={cn(
                  "cafe-card-interactive p-5 text-center group",
                  scenario === s.value
                    ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20"
                    : ""
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-3 transition-colors",
                  scenario === s.value
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-secondary)] text-[var(--color-primary)] group-hover:bg-[var(--color-secondary)]/80"
                )}>
                  <Icon size={22} />
                </div>
                <span className={cn("text-sm font-semibold", scenario === s.value ? "text-[var(--color-primary)]" : "text-[var(--color-text)]")}>{s.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {(scenario === "new" || scenario === "transfer") && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-3">Select your State / UT</h2>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-5 py-4 border-2 border-[var(--cafe-border)] rounded-2xl bg-white text-[var(--color-text)] text-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none"
          >
            <option value="">Select location</option>
            {allLocations.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </motion.div>
      )}

      {scenario && (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
          {checklists.map((checklist, i) => (
            <motion.div key={i} variants={itemVariants} className="cafe-card overflow-hidden">
              <div className="bg-[var(--color-surface)] px-6 py-4 border-b border-[var(--cafe-border)]">
                <h3 className="font-semibold text-[var(--color-primary)]">{checklist.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {checklist.docs.map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--color-text)] opacity-80">{doc}</span>
                    </li>
                  ))}
                </ul>
                {checklist.notes && (
                  <div className="mt-5 flex items-start gap-3 bg-amber-50 border border-amber-200 p-4 rounded-xl">
                    <AlertTriangle size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-amber-800 text-sm">{checklist.notes}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {!scenario && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="cafe-card p-10 text-center mt-8">
          <Info size={32} className="mx-auto text-[var(--color-text)] opacity-30 mb-4" />
          <p className="text-[var(--color-text)] opacity-60 text-lg">Select a scenario above to see your document requirements.</p>
        </motion.div>
      )}
    </div>
  );
}
