"use client";

import { useState } from "react";
import { ScanSearch, Info } from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import { channelOptions, languageOptions } from "@/data/mockData";

export default function AnalyzerPage() {
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState(channelOptions[0]);
  const [language, setLanguage] = useState(languageOptions[0]);
  const [submittedNotice, setSubmittedNotice] = useState(false);

  function handleAnalyze(event) {
    event.preventDefault();
    setSubmittedNotice(true);
  }

  function handleReset() {
    setMessage("");
    setChannel(channelOptions[0]);
    setLanguage(languageOptions[0]);
    setSubmittedNotice(false);
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
      <Card
        title="Message Input"
        subtitle="Enter a sample SMS, email, or chat message to prepare an inspection request"
        className="lg:col-span-3"
      >
        <form onSubmit={handleAnalyze} className="space-y-5">
          <div>
            <label
              htmlFor="message-input"
              className="mb-2 block text-sm font-medium text-[#0D0D0D]"
            >
              Message Content
            </label>
            <textarea
              id="message-input"
              rows={8}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (submittedNotice) setSubmittedNotice(false);
              }}
              placeholder="Paste or type a message here (e.g., suspicious link, promotional text, or regular conversation)..."
              className="w-full rounded-lg border border-[#1A1A18]/30 bg-[#FFFDD0]/60 px-3.5 py-3 text-sm text-[#0D0D0D] placeholder:text-[#4D4D45]/75 focus:border-[#0D0D0D] focus:outline-none focus:ring-1 focus:ring-[#0D0D0D]"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="channel-select"
                className="mb-2 block text-sm font-medium text-[#0D0D0D]"
              >
                Channel
              </label>
              <select
                id="channel-select"
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                className="w-full rounded-lg border border-[#1A1A18]/30 bg-[#FFFDD0]/60 px-3.5 py-2.5 text-sm text-[#0D0D0D] focus:border-[#0D0D0D] focus:outline-none focus:ring-1 focus:ring-[#0D0D0D]"
              >
                {channelOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="language-select"
                className="mb-2 block text-sm font-medium text-[#0D0D0D]"
              >
                Language
              </label>
              <select
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded-lg border border-[#1A1A18]/30 bg-[#FFFDD0]/60 px-3.5 py-2.5 text-sm text-[#0D0D0D] focus:border-[#0D0D0D] focus:outline-none focus:ring-1 focus:ring-[#0D0D0D]"
              >
                {languageOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button type="submit" variant="primary">
              <ScanSearch className="h-4 w-4" />
              Analyze Message
            </Button>
            <Button type="button" variant="secondary" onClick={handleReset}>
              Clear Form
            </Button>
          </div>
        </form>
      </Card>

      <Card
        title="Analysis Result"
        subtitle="Classification output panel"
        className="lg:col-span-2"
      >
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-dashed border-[#1A1A18]/30 bg-[#FFFDD0]/50 p-6 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1A1A18]/20 bg-[#0D0D0D] text-[#FFFDD0]">
            <Info className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-sm font-semibold text-[#0D0D0D]">
            No Analysis Available Yet
          </h3>

          <p className="mt-2 max-w-xs text-xs leading-relaxed text-[#4D4D45]">
            {submittedNotice
              ? `UI preview only: "${channel}" (${language}) submission captured locally. Backend API and ML inference models are not connected yet.`
              : "This panel is reserved for spam classification labels, risk scores, and model confidence once the backend service is integrated."}
          </p>

          <div className="mt-6 w-full space-y-2.5 border-t border-[#CFCB9E] pt-4 text-left text-xs">
            <div className="flex items-center justify-between text-[#4D4D45]">
              <span>Selected Channel</span>
              <span className="font-medium text-[#0D0D0D]">{channel}</span>
            </div>
            <div className="flex items-center justify-between text-[#4D4D45]">
              <span>Selected Language</span>
              <span className="font-medium text-[#0D0D0D]">{language}</span>
            </div>
            <div className="flex items-center justify-between text-[#4D4D45]">
              <span>Prediction Status</span>
              <span className="font-medium text-[#0D0D0D]">Awaiting Backend</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

