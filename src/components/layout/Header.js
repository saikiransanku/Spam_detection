"use client";

import { usePathname } from "next/navigation";
import { Menu, Shield } from "lucide-react";

const pageTitles = {
  "/": {
    title: "Dashboard",
    subtitle: "Overview of message volume and classification metrics",
  },
  "/analyzer": {
    title: "Message Analyzer",
    subtitle: "Inspect message content across channels and languages",
  },
  "/history": {
    title: "Detection History",
    subtitle: "Review previously logged sample classification records",
  },
  "/models": {
    title: "Model Overview",
    subtitle: "Planned NLP and classical architectures for spam detection",
  },
  "/settings": {
    title: "Settings",
    subtitle: "Interface display and default workspace preferences",
  },
};

export default function Header({ onMenuClick }) {
  const pathname = usePathname();
  const current = pageTitles[pathname] || {
    title: "Advanced Spam Detection System",
    subtitle: "Cybersecurity research interface",
  };

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[#CFCB9E] bg-[#FFFDD0]/95 px-4 backdrop-blur-xs sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex items-center justify-center rounded-lg border border-[#1A1A18]/25 bg-[#FFFEE8] p-2 text-[#0D0D0D] hover:bg-[#F4F0BE] lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div>
          <h1 className="text-base font-semibold tracking-tight text-[#0D0D0D] sm:text-lg">
            {current.title}
          </h1>
          <p className="hidden text-xs text-[#4D4D45] sm:block">
            {current.subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#1A1A18]/25 bg-[#FFFEE8] px-3 py-1 text-xs font-medium text-[#0D0D0D]">
          <Shield className="h-3.5 w-3.5 text-[#0D0D0D]" />
          <span className="hidden sm:inline">Static UI Mode</span>
          <span className="sm:hidden">Static UI</span>
        </div>
      </div>
    </header>
  );
}

