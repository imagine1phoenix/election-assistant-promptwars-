import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ & Knowledge Base",
  description: "Find answers to common questions about Indian elections, EVMs, NOTA, proxy voting, postal ballots, and more.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
