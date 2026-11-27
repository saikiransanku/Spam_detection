export const dashboardStats = [
  {
    id: "total-analyzed",
    title: "Total Messages Analyzed",
    value: "12,480",
    subtitle: "Sample placeholder volume across SMS, Email, and Chat",
    iconKey: "messages",
  },
  {
    id: "spam-detected",
    title: "Spam Messages Detected",
    value: "3,412",
    subtitle: "27.3% of total sample dataset",
    iconKey: "spam",
  },
  {
    id: "legitimate-messages",
    title: "Legitimate Messages",
    value: "9,068",
    subtitle: "72.7% verified benign traffic in mock set",
    iconKey: "legitimate",
  },
  {
    id: "detection-rate",
    title: "Detection Rate",
    value: "96.4%",
    subtitle: "Placeholder UI metric (no active model connected)",
    iconKey: "rate",
  },
];

export const recentActivity = [
  {
    id: "act-1",
    preview:
      "URGENT: Your bank KYC has expired. Click the link to verify within 2 hours.",
    channel: "SMS",
    language: "English",
    classification: "Spam",
    time: "2 mins ago",
  },
  {
    id: "act-2",
    preview:
      "Team meeting rescheduled to 3:30 PM in Conference Room B. Please review notes.",
    channel: "Email",
    language: "English",
    classification: "Legitimate",
    time: "14 mins ago",
  },
  {
    id: "act-3",
    preview:
      "Aapka Rs. 25,000 cashback approve ho gaya hai, claim karne ke liye OTP share karein.",
    channel: "Chat",
    language: "Hinglish",
    classification: "Spam",
    time: "32 mins ago",
  },
  {
    id: "act-4",
    preview:
      "మీ ఆర్డర్ #48219 షిప్ చేయబడింది మరియు రేపు ఉదయం డెలివరీ అవుతుంది.",
    channel: "SMS",
    language: "Telugu",
    classification: "Legitimate",
    time: "1 hr ago",
  },
  {
    id: "act-5",
    preview:
      "आपने लॉटरी में ₹5,00,000 जीते हैं, अभी दिए गए लिंक पर विवरण भरें।",
    channel: "SMS",
    language: "Hindi",
    classification: "Spam",
    time: "2 hrs ago",
  },
];

export const categorySummary = [
  {
    id: "cat-1",
    name: "Phishing & Credential Theft",
    count: 1380,
    percentage: 40,
  },
  {
    id: "cat-2",
    name: "Financial & Lottery Scams",
    count: 960,
    percentage: 28,
  },
  {
    id: "cat-3",
    name: "Promotional Bulk Spam",
    count: 685,
    percentage: 20,
  },
  {
    id: "cat-4",
    name: "Suspicious Malicious Links",
    count: 387,
    percentage: 12,
  },
];

export const detectionHistory = [
  {
    id: "hist-101",
    preview:
      "Claim your free reward voucher before midnight by confirming your card PIN.",
    channel: "SMS",
    language: "English",
    classification: "Spam",
    date: "2026-11-25 18:42",
    riskScore: "94%",
  },
  {
    id: "hist-102",
    preview:
      "Monthly research progress report attached for review prior to Friday sync.",
    channel: "Email",
    language: "English",
    classification: "Legitimate",
    date: "2026-11-25 17:15",
    riskScore: "6%",
  },
  {
    id: "hist-103",
    preview:
      "Bhai jaldi ye link open karo, free recharge mil raha hai sabko aaj.",
    channel: "Chat",
    language: "Hinglish",
    classification: "Spam",
    date: "2026-11-25 15:50",
    riskScore: "89%",
  },
  {
    id: "hist-104",
    preview:
      "आपका बिजली बिल बकाया है। कनेक्शन कटने से बचाने के लिए तुरंत भुगतान करें।",
    channel: "SMS",
    language: "Hindi",
    classification: "Spam",
    date: "2026-11-25 14:10",
    riskScore: "91%",
  },
  {
    id: "hist-105",
    preview:
      "దయచేసి రేపటి ప్రాజెక్ట్ సమర్పణ కోసం మీ స్లయిడ్‌లను అప్‌డేట్ చేయండి.",
    channel: "Chat",
    language: "Telugu",
    classification: "Legitimate",
    date: "2026-11-24 20:05",
    riskScore: "11%",
  },
  {
    id: "hist-106",
    preview:
      "Security notice: Unusual sign-in attempt blocked. Verify your mailbox credentials.",
    channel: "Email",
    language: "English",
    classification: "Spam",
    date: "2026-11-24 16:33",
    riskScore: "86%",
  },
  {
    id: "hist-107",
    preview:
      "Invoice #INV-2026-089 has been settled. Receipt is available in your portal.",
    channel: "Email",
    language: "English",
    classification: "Legitimate",
    date: "2026-11-24 11:20",
    riskScore: "4%",
  },
];

export const modelOverviewData = [
  {
    id: "distilmbert",
    name: "DistilmBERT",
    status: "Planned",
    category: "Transformer Model",
    description:
      "Placeholder entry for a compact multilingual BERT architecture intended for low-latency text classification experiments across supported languages.",
    notes: "Not trained or deployed in this frontend prototype.",
  },
  {
    id: "xlm-roberta",
    name: "XLM-RoBERTa",
    status: "Placeholder",
    category: "Multilingual Transformer",
    description:
      "Placeholder entry for cross-lingual representation modeling covering English, Hindi, Telugu, and code-mixed Hinglish message inputs.",
    notes: "Weights and inference endpoint not connected.",
  },
  {
    id: "tfidf-logreg",
    name: "TF-IDF + Logistic Regression",
    status: "Pending Integration",
    category: "Classical Baseline",
    description:
      "Placeholder entry for a lightweight lexical baseline using n-gram TF-IDF features paired with regularized linear classification.",
    notes: "Awaiting offline training pipeline and backend API.",
  },
  {
    id: "hybrid-model",
    name: "Hybrid Detection Model",
    status: "Not Connected",
    category: "Ensemble Architecture",
    description:
      "Placeholder entry for combining statistical text signals, channel metadata, and transformer embeddings into a unified scoring stage.",
    notes: "Architecture design placeholder only.",
  },
];

export const channelOptions = ["SMS", "Email", "Chat"];
export const languageOptions = ["English", "Hindi", "Telugu", "Hinglish"];

