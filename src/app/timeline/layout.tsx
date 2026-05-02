import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Election Timeline",
  description: "Follow the complete election process in India from the official announcement and nomination to polling day and result declaration.",
};

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
