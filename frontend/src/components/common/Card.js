export default function Card({
  title,
  subtitle,
  action,
  children,
  className = "",
  bodyClassName = "",
}) {
  return (
    <section
      className={`rounded-xl border border-[#1A1A18]/20 bg-[#FFFEE8] shadow-xs ${className}`}
    >
      {(title || subtitle || action) && (
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#CFCB9E] px-5 py-4">
          <div>
            {title && (
              <h2 className="text-base font-semibold tracking-tight text-[#0D0D0D]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-0.5 text-xs text-[#4D4D45]">{subtitle}</p>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      <div className={`p-5 ${bodyClassName}`}>{children}</div>
    </section>
  );
}

