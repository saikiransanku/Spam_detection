"use client";

import { useState } from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import { languageOptions } from "@/data/mockData";

export default function SettingsPage() {
  const [selectedTheme, setSelectedTheme] = useState("cream-black");
  const [defaultLanguage, setDefaultLanguage] = useState(languageOptions[0]);
  const [notifications, setNotifications] = useState({
    highRiskAlerts: true,
    dailyDigest: false,
    channelSummary: true,
  });

  function togglePreference(key) {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  return (
    <div className="max-w-3xl space-y-6">
      <Card
        title="Theme Preference"
        subtitle="Visual appearance options for the research console"
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setSelectedTheme("cream-black")}
            className={`flex items-center justify-between rounded-lg border p-4 text-left transition-colors ${
              selectedTheme === "cream-black"
                ? "border-[#0D0D0D] bg-[#F4F0BE]"
                : "border-[#CFCB9E] bg-[#FFFDD0]/60 hover:bg-[#F4F0BE]/50"
            }`}
          >
            <div>
              <p className="text-sm font-semibold text-[#0D0D0D]">
                Cream &amp; Black
              </p>
              <p className="mt-0.5 text-xs text-[#4D4D45]">
                Active #FFFDD0 canvas with black accents
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-5 w-5 rounded-full border border-[#0D0D0D] bg-[#FFFDD0]" />
              <span className="h-5 w-5 rounded-full border border-[#0D0D0D] bg-[#0D0D0D]" />
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedTheme("black-cream")}
            className={`flex items-center justify-between rounded-lg border p-4 text-left transition-colors ${
              selectedTheme === "black-cream"
                ? "border-[#0D0D0D] bg-[#F4F0BE]"
                : "border-[#CFCB9E] bg-[#FFFDD0]/60 hover:bg-[#F4F0BE]/50"
            }`}
          >
            <div>
              <p className="text-sm font-semibold text-[#0D0D0D]">
                High-Contrast Black
              </p>
              <p className="mt-0.5 text-xs text-[#4D4D45]">
                Black surface with #FFFDD0 highlights (preview UI)
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-5 w-5 rounded-full border border-[#0D0D0D] bg-[#0D0D0D]" />
              <span className="h-5 w-5 rounded-full border border-[#0D0D0D] bg-[#FFFDD0]" />
            </div>
          </button>
        </div>
      </Card>

      <Card
        title="Default Language"
        subtitle="Preferred default language selection for message analysis"
      >
        <div className="max-w-xs">
          <label
            htmlFor="default-language"
            className="mb-2 block text-sm font-medium text-[#0D0D0D]"
          >
            Primary Language
          </label>
          <select
            id="default-language"
            value={defaultLanguage}
            onChange={(e) => setDefaultLanguage(e.target.value)}
            className="w-full rounded-lg border border-[#1A1A18]/30 bg-[#FFFDD0]/60 px-3.5 py-2.5 text-sm text-[#0D0D0D] focus:border-[#0D0D0D] focus:outline-none focus:ring-1 focus:ring-[#0D0D0D]"
          >
            {languageOptions.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </Card>

      <Card
        title="Notification Preferences"
        subtitle="Static UI controls for future alert routing"
      >
        <div className="space-y-4">
          {[
            {
              key: "highRiskAlerts",
              title: "High-risk spam alerts",
              description:
                "Highlight messages flagged with elevated risk scores.",
            },
            {
              key: "dailyDigest",
              title: "Daily summary report",
              description:
                "Receive a daily overview of analyzed messages and trends.",
            },
            {
              key: "channelSummary",
              title: "Channel-level breakdown",
              description:
                "Include separate metrics for SMS, Email, and Chat channels.",
            },
          ].map((pref) => {
            const enabled = notifications[pref.key];
            return (
              <div
                key={pref.key}
                className="flex items-center justify-between gap-4 border-b border-[#E4E0B5] pb-4 last:border-b-0 last:pb-0"
              >
                <div>
                  <p className="text-sm font-medium text-[#0D0D0D]">
                    {pref.title}
                  </p>
                  <p className="mt-0.5 text-xs text-[#4D4D45]">
                    {pref.description}
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={enabled}
                  onClick={() => togglePreference(pref.key)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-[#0D0D0D] transition-colors ${
                    enabled ? "bg-[#0D0D0D]" : "bg-[#E6E2B5]"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
                      enabled
                        ? "translate-x-5.5 bg-[#FFFDD0]"
                        : "translate-x-1 bg-[#0D0D0D]"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[#CFCB9E] pt-4">
          <p className="text-xs text-[#4D4D45]">
            Preferences are local UI state only and are not persisted.
          </p>
          <Button variant="secondary" size="sm" disabled>
            Save Preferences
          </Button>
        </div>
      </Card>
    </div>
  );
}

