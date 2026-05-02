import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voter Registration Wizard",
  description: "Get personalized, step-by-step guidance on how to register to vote in India based on your age, citizenship, and current location.",
};

export default function WizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
