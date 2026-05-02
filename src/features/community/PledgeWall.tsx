"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Heart } from "lucide-react";

type Pledge = {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
};

export function PledgeWall() {
  const [pledges, setPledges] = useState<Pledge[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Listen to real-time updates from Firestore
    const q = query(collection(db, "pledges"), orderBy("timestamp", "desc"), limit(10));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newPledges: Pledge[] = [];
      snapshot.forEach((doc) => {
        newPledges.push({ id: doc.id, ...doc.data() } as Pledge);
      });
      setPledges(newPledges);
    }, (error) => {
      console.warn("Firestore listener error (expected if permissions/rules are strict or offline):", error);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "pledges"), {
        name: name.trim(),
        message: message.trim(),
        timestamp: new Date(),
      });
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      // Fallback for demo if Firestore isn't configured with a real DB yet
      setPledges(prev => [{
        id: Date.now().toString(),
        name,
        message,
        timestamp: new Date()
      }, ...prev].slice(0, 10));
      setName("");
      setMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cafe-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-[#FF9933]/10 w-12 h-12 rounded-2xl flex items-center justify-center">
          <Users className="text-[#FF9933]" size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[var(--color-primary)]">Democracy Pledge Wall</h3>
          <p className="text-[var(--color-text)] opacity-70">Join thousands of citizens pledging to vote.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-primary)] mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="E.g., Priya"
                className="w-full px-4 py-3 border-2 border-[var(--cafe-border)] rounded-xl focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-primary)] mb-1">
                Why will you vote?
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="I pledge to vote because..."
                className="w-full px-4 py-3 border-2 border-[var(--cafe-border)] rounded-xl focus:outline-none focus:border-[var(--color-secondary)] transition-colors h-24 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gradient-to-r from-[#FF9933] to-[#FF8000] text-white rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Take the Pledge"}
            </button>
          </form>
        </div>

        {/* Real-time Feed */}
        <div className="bg-[var(--color-surface)] border border-[var(--cafe-border)] rounded-2xl p-5 h-[300px] overflow-y-auto">
          <h4 className="font-semibold text-[var(--color-primary)] mb-4 flex items-center gap-2">
            <Heart size={16} className="text-[#138808]" /> Recent Pledges
          </h4>
          <div className="space-y-4">
            <AnimatePresence>
              {pledges.length === 0 ? (
                <p className="text-sm text-[var(--color-text)] opacity-60 italic text-center py-8">
                  Be the first to take the pledge!
                </p>
              ) : (
                pledges.map((pledge) => (
                  <motion.div
                    key={pledge.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white p-4 rounded-xl border border-[var(--cafe-border)] shadow-sm"
                  >
                    <p className="font-semibold text-[var(--color-primary)] text-sm mb-1">{pledge.name}</p>
                    <p className="text-[var(--color-text)] text-sm italic">"{pledge.message}"</p>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
