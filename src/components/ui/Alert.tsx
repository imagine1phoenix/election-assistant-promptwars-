"use client";

import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, Info, XCircle } from "lucide-react";

interface AlertProps {
  variant: "success" | "warning" | "error" | "info";
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const icons = {
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
  info: Info,
};

const styles = {
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
  info: "alert-info",
};

export function Alert({ variant, title, children, className }: AlertProps) {
  const Icon = icons[variant];

  return (
    <div
      className={cn("p-4 rounded-xl flex items-start gap-3", styles[variant], className)}
      role="alert"
    >
      <Icon size={20} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
      <div>
        {title && <p className="font-semibold mb-1">{title}</p>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
    </div>
  );
}
