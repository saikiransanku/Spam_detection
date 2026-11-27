export default function ActivityTable({ items = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[#CFCB9E] text-xs font-medium uppercase tracking-wider text-[#4D4D45]">
            <th className="py-3 pr-4">Message Preview</th>
            <th className="px-4 py-3">Channel</th>
            <th className="px-4 py-3">Language</th>
            <th className="px-4 py-3">Status</th>
            <th className="py-3 pl-4 text-right">Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E4E0B5]">
          {items.map((item) => {
            const isSpam = item.classification === "Spam";
            return (
              <tr
                key={item.id}
                className="transition-colors hover:bg-[#F7F3C4]/60"
              >
                <td className="max-w-xs truncate py-3.5 pr-4 font-medium text-[#0D0D0D]">
                  {item.preview}
                </td>
                <td className="px-4 py-3.5 text-[#4D4D45]">{item.channel}</td>
                <td className="px-4 py-3.5 text-[#4D4D45]">{item.language}</td>
                <td className="px-4 py-3.5">
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${isSpam
                      ? "border-[#991B1B]/30 bg-[#FEE2E2] text-[#7F1D1D]"
                      : "border-[#166534]/30 bg-[#DCFCE7] text-[#14532D]"
                      }`}
                  >
                    {item.classification}
                  </span>
                </td>
                <td className="py-3.5 pl-4 text-right text-xs text-[#4D4D45]">
                  {item.time}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

