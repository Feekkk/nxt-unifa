import Link from "next/link";
import { type ReactNode } from "react";

type ProgramCardProps = {
  icon: ReactNode;
  name: string;
  description: string;
};

export function ProgramCard({ icon, name, description }: ProgramCardProps) {
  return (
    <div className="group flex flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-700">
        {icon}
      </div>
      <h4 className="text-base font-semibold text-zinc-900">{name}</h4>
      <p className="mt-1 flex-1 text-sm text-zinc-600">{description}</p>
      <div className="mt-4">
        <Link href="#" className="text-sm font-semibold text-blue-700 hover:underline">
          Learn More
        </Link>
      </div>
    </div>
  );
}




