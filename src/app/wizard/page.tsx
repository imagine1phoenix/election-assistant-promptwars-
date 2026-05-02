"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, RotateCcw, CheckCircle2, AlertCircle, PartyPopper, MapPin, IdCard, UserCheck, CalendarDays } from "lucide-react";
import { indianStates, unionTerritories } from "@/data/electionData";
import { cn } from "@/lib/utils";

const allLocations = [...indianStates, ...unionTerritories].sort();

interface WizardState {
  step: number;
  isCitizen: boolean | null;
  age: string;
  isFirstTime: boolean | null;
  hasVoterId: boolean | null;
  location: string;
  hasMoved: boolean | null;
}

const stepIcons = [UserCheck, CalendarDays, PartyPopper, IdCard, MapPin, MapPin, CheckCircle2];

const yesNoBtn = (label: string, active: boolean, onClick: () => void) => (
  <button
    onClick={onClick}
    className={cn(
      "px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200",
      active
        ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20"
        : "bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)]/80"
    )}
  >
    {label}
  </button>
);

export default function WizardPage() {
  const [wizard, setWizard] = useState<WizardState>({
    step: 0,
    isCitizen: null,
    age: "",
    isFirstTime: null,
    hasVoterId: null,
    location: "",
    hasMoved: null,
  });
  const [direction, setDirection] = useState(1);

  const update = (field: keyof WizardState, value: unknown) => {
    setWizard((prev) => ({ ...prev, [field]: value }));
  };

  const goTo = (step: number) => {
    setDirection(step > wizard.step ? 1 : -1);
    setWizard((prev) => ({ ...prev, step }));
  };

  const reset = () => {
    setDirection(-1);
    setWizard({ step: 0, isCitizen: null, age: "", isFirstTime: null, hasVoterId: null, location: "", hasMoved: null });
  };

  const getRecommendation = () => {
    if (!wizard.isCitizen) {
      return {
        title: "Not Eligible to Vote",
        message: "Only Indian citizens are eligible to vote in Indian elections. If you are in the process of obtaining citizenship, please wait until it is granted before registering.",
        action: null,
        tone: "info" as const,
      };
    }

    const ageNum = parseInt(wizard.age);
    if (isNaN(ageNum) || ageNum < 18) {
      return {
        title: "Not Yet Eligible",
        message: `You must be at least 18 years old to vote. ${!isNaN(ageNum) ? `You can register when you turn 18 (${18 - ageNum} ${18 - ageNum === 1 ? "year" : "years"} to go!).` : "Please enter a valid age."}`,
        action: "You can pre-register if you will turn 18 before the qualifying date (1st January of the year).",
        tone: "info" as const,
      };
    }

    if (wizard.isFirstTime === true) {
      return {
        title: "Register as a New Voter",
        message: "Since you are a first-time voter, you need to register yourself in the electoral roll.",
        action: "Fill Form 6 at voters.eci.gov.in with proof of age and address.",
        tone: "success" as const,
      };
    }

    if (wizard.hasVoterId === false) {
      return {
        title: "Register to Get Your Voter ID",
        message: "It looks like you are eligible but not yet registered. You need to get your Voter ID (EPIC).",
        action: "Fill Form 6 online at voters.eci.gov.in or visit your nearest ERO office with proof of age and address.",
        tone: "success" as const,
      };
    }

    if (wizard.hasMoved === true) {
      return {
        title: "Transfer Your Voter Registration",
        message: `Since you have moved to ${wizard.location || "a new location"}, you need to update your registration.`,
        action: "Fill Form 8B for transposition within the same constituency, or Form 6 if moving to a new constituency.",
        tone: "success" as const,
      };
    }

    return {
      title: "You Are All Set!",
      message: "Based on your responses, you appear to be registered and ready to vote.",
      action: "Make sure your details are correct. Use Form 8 to update any errors. Check your name on voters.eci.gov.in.",
      tone: "success" as const,
    };
  };

  const totalSteps = 7;
  const progress = ((wizard.step + 1) / totalSteps) * 100;
  const StepIcon = stepIcons[wizard.step];

  const renderStep = () => {
    switch (wizard.step) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">Are you a citizen of India?</h2>
            <p className="text-[var(--color-text)] opacity-70">Only Indian citizens can vote in Indian elections.</p>
            <div className="flex gap-3">
              {yesNoBtn("Yes", false, () => { update("isCitizen", true); goTo(1); })}
              {yesNoBtn("No", false, () => { update("isCitizen", false); goTo(1); })}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">What is your age?</h2>
            <p className="text-[var(--color-text)] opacity-70">You must be 18 or older to vote.</p>
            <div className="flex gap-3 items-center">
              <input type="number" min={0} max={150} aria-label="Your age" value={wizard.age} onChange={(e) => update("age", e.target.value)} className="w-28 px-5 py-4 border-2 border-[var(--cafe-border)] rounded-2xl text-xl bg-white text-[var(--color-primary)] font-semibold focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="18" />
              <button onClick={() => goTo(2)} disabled={!wizard.age} className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-2xl font-semibold hover:bg-[var(--color-primary)]/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed">Next</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">Is this your first time registering to vote?</h2>
            <div className="flex flex-wrap gap-3">
              {yesNoBtn("Yes, first time", false, () => { update("isFirstTime", true); goTo(3); })}
              {yesNoBtn("Already registered", false, () => { update("isFirstTime", false); goTo(3); })}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">Do you have a Voter ID card?</h2>
            <div className="flex gap-3">
              {yesNoBtn("Yes", false, () => { update("hasVoterId", true); goTo(4); })}
              {yesNoBtn("No", false, () => { update("hasVoterId", false); goTo(4); })}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">Have you moved since last registering?</h2>
            <div className="flex gap-3">
              {yesNoBtn("Yes", false, () => { update("hasMoved", true); goTo(5); })}
              {yesNoBtn("No", false, () => { update("hasMoved", false); goTo(5); })}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">Where do you currently live?</h2>
            <select value={wizard.location} onChange={(e) => update("location", e.target.value)} className="w-full px-5 py-4 border-2 border-[var(--cafe-border)] rounded-2xl text-lg bg-white text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none">
              <option value="">Select your State / UT</option>
              {allLocations.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
            </select>
            <button onClick={() => goTo(6)} disabled={!wizard.location} className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-2xl font-semibold hover:bg-[var(--color-primary)]/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2">Get Recommendation <ArrowRight size={18} /></button>
          </div>
        );
      case 6:
        const rec = getRecommendation();
        const toneColors = {
          success: { bg: "bg-green-50", border: "border-green-200", icon: "text-green-600", title: "text-green-900" },
          info: { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-600", title: "text-blue-900" },
        };
        const tc = toneColors[rec.tone];
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">Your Recommendation</h2>
            <div className={cn("cafe-card p-6 border-2", tc.border)}>
              <div className="flex items-center gap-3 mb-3">
                {rec.tone === "success" ? <CheckCircle2 size={24} className={tc.icon} /> : <AlertCircle size={24} className={tc.icon} />}
                <h3 className={cn("text-xl font-semibold", tc.title)}>{rec.title}</h3>
              </div>
              <p className="text-[var(--color-text)] opacity-80 mb-4">{rec.message}</p>
              {rec.action && (
                <div className="bg-white border border-[var(--cafe-border)] rounded-xl p-4">
                  <p className="font-semibold text-[var(--color-primary)] text-sm uppercase tracking-wider mb-1">Action</p>
                  <p className="text-[var(--color-text)]">{rec.action}</p>
                </div>
              )}
            </div>
            <button onClick={reset} className="px-6 py-3 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-2xl font-semibold hover:bg-[var(--color-secondary)]/80 transition-all flex items-center gap-2"><RotateCcw size={16} />Start Over</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <p className="text-sm font-medium text-[var(--color-primary)] mb-2 uppercase tracking-wider">Personalized</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4 tracking-tight">Step-by-Step Wizard</h1>
        <p className="text-lg text-[var(--color-text)] opacity-80 max-w-2xl">Answer a few questions and get personalized guidance on your election journey.</p>
      </motion.div>

      <div className="mb-8">
        <div className="h-2 bg-[var(--color-secondary)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-primary)] rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <p className="text-sm text-[var(--color-text)] opacity-60 mt-2">Step {wizard.step + 1} of {totalSteps}</p>
      </div>

      <motion.div
        key={wizard.step}
        initial={{ opacity: 0, x: direction * 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -direction * 30 }}
        transition={{ duration: 0.3 }}
        className="cafe-card p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[var(--color-secondary)] w-10 h-10 rounded-xl flex items-center justify-center">
            <StepIcon size={20} className="text-[var(--color-primary)]" />
          </div>
        </div>
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
        {wizard.step > 0 && wizard.step < 5 && (
          <button onClick={() => goTo(wizard.step - 1)} className="text-sm text-[var(--color-text)] opacity-50 hover:opacity-80 transition-opacity mt-6 flex items-center gap-1"><ArrowLeft size={14} />Back</button>
        )}
      </motion.div>
    </div>
  );
}
