import Link from "next/link";
import {
  MessageSquareText,
  ShieldAlert,
  ShieldCheck,
  Activity,
  ArrowRight,
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import ActivityTable from "@/components/dashboard/ActivityTable";
import Card from "@/components/common/Card";
import {
  dashboardStats,
  recentActivity,
  categorySummary,
} from "@/data/mockData";

const iconMap = {
  messages: MessageSquareText,
  spam: ShieldAlert,
  legitimate: ShieldCheck,
  rate: Activity,
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={iconMap[stat.iconKey]}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          title="Recent Activity"
          subtitle="Latest placeholder samples across channels"
          className="lg:col-span-2"
          action={
            <Link
              href="/history"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0D0D0D] underline-offset-4 hover:underline"
            >
              View all
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          }
        >
          <ActivityTable items={recentActivity} />
        </Card>

        <Card
          title="Message Category Summary"
          subtitle="Distribution of sample spam categories"
        >
          <div className="space-y-4">
            {categorySummary.map((category) => (
              <div key={category.id} className="space-y-1.5">
                <div className="flex items-center justify-between gap-2 text-sm">
                  <span className="font-medium text-[#0D0D0D]">
                    {category.name}
                  </span>
                  <span className="text-xs text-[#4D4D45]">
                    {category.count.toLocaleString()} ({category.percentage}%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#E6E2B5]">
                  <div
                    className="h-full rounded-full bg-[#0D0D0D]"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-[#CFCB9E] bg-[#F4F0BE]/70 p-3.5">
            <p className="text-xs font-medium text-[#0D0D0D]">
              Static Research Placeholder
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#4D4D45]">
              All figures above are static mock values representing the future
              dashboard layout.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

