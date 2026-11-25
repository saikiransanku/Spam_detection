export default function StatCard({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="rounded-xl border border-[#1A1A18]/20 bg-[#FFFEE8] p-5 shadow-xs">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-[#4D4D45]">
            {title}
          </p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-[#0D0D0D]">
            {value}
          </p>
        </div>

        {Icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#1A1A18]/15 bg-[#0D0D0D] text-[#FFFDD0]">
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>

      {subtitle && (
        <p className="mt-3 text-xs text-[#4D4D45]">{subtitle}</p>
      )}
    </div>
  );
}

