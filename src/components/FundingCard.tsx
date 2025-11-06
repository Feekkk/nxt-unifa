import { type ReactNode } from "react";

type FundingCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FundingCard({ icon, title, description }: FundingCardProps) {
  return (
    <div className="group rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-700">
        {icon}
      </div>
      <h4 className="text-base font-semibold text-zinc-900">{title}</h4>
      <p className="mt-1 text-sm text-zinc-600">{description}</p>
    </div>
  );
}




