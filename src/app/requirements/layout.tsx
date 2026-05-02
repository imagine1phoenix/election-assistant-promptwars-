import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ID & Requirements",
  description: "Check the documents and ID proofs required to register as a voter in India or to vote at the polling booth.",
};

export default function RequirementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
