import { Cpu } from "lucide-react";
import Card from "@/components/common/Card";
import { modelOverviewData } from "@/data/mockData";

export default function ModelsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-[#1A1A18]/20 bg-[#FFFEE8] px-5 py-4 text-xs leading-relaxed text-[#4D4D45]">
        <span className="font-semibold text-[#0D0D0D]">Research Note:</span>{" "}
        The architectures listed below represent planned model candidates for
        future evaluation. None of these models are currently trained, hosted,
        or deployed.
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {modelOverviewData.map((model) => (
          <Card
            key={model.id}
            title={model.name}
            subtitle={model.category}
            action={
              <span className="inline-flex items-center rounded-full border border-[#1A1A18]/30 bg-[#F4F0BE] px-2.5 py-1 text-xs font-medium text-[#0D0D0D]">
                {model.status}
              </span>
            }
          >
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-[#4D4D45]">
                {model.description}
              </p>

              <div className="flex items-center gap-2 border-t border-[#CFCB9E] pt-3 text-xs text-[#4D4D45]">
                <Cpu className="h-3.5 w-3.5 shrink-0 text-[#0D0D0D]" />
                <span>{model.notes}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

