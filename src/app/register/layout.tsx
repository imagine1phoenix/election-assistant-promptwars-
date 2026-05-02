import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voter Registration Guide",
  description: "Learn how to register to vote in India, transfer your constituency, or correct your details. Step-by-step guide to Forms 6, 7, 8, and 8B.",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
