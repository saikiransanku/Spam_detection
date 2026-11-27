"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ScanSearch,
  History,
  Cpu,
  Settings,
  ShieldCheck,
  X,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Message Analyzer", href: "/analyzer", icon: ScanSearch },
  { label: "Detection History", href: "/history", icon: History },
  { label: "Model Overview", href: "/models", icon: Cpu },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#0D0D0D]/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-[#262622] bg-[#0D0D0D] text-[#FFFDD0] transition-transform duration-200 lg:static lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-[#262622] px-5">
          <Link href="/" className="flex items-center gap-2.5" onClick={onClose}>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#FFFDD0]/30 bg-[#FFFDD0] text-[#0D0D0D]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight text-[#FFFDD0]">
                SpamGuard
              </p>
              <p className="text-[11px] text-[#FFFDD0]/65">
                Research Console
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-[#FFFDD0]/75 hover:bg-[#1E1E1B] hover:text-[#FFFDD0] lg:hidden"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-5" aria-label="Primary">
          <p className="px-3 pb-2 text-[11px] font-medium uppercase tracking-wider text-[#FFFDD0]/50">
            Navigation
          </p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                  ? "bg-[#FFFDD0] text-[#0D0D0D]"
                  : "text-[#FFFDD0]/80 hover:bg-[#1C1C19] hover:text-[#FFFDD0]"
                  }`}
              >
                <Icon
                  className={`h-4 w-4 shrink-0 ${isActive ? "text-[#0D0D0D]" : "text-[#FFFDD0]/70"
                    }`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[#262622] p-4">
          <div className="rounded-lg border border-[#2E2E29] bg-[#161613] p-3">
            <p className="text-xs font-medium text-[#FFFDD0]">
              Frontend Foundation
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-[#FFFDD0]/65">
              Static placeholder interface. Backend and ML pipelines will be
              connected separately.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

