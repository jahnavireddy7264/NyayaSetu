import type { ReactNode } from "react";
import { TrendingUp } from "lucide-react";

type DashboardCardProps = {
  title: string;
  value: number | string;
  icon: ReactNode;
  color: string;
};

export default function DashboardCard({
  title,
  value,
  icon,
  color,
}: DashboardCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white
        p-6
        shadow-lg
        border
        border-gray-100
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Decorative Background */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 opacity-40 group-hover:scale-125 transition-transform duration-500"></div>

      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
            {title}
          </p>

          <h2 className="mt-3 text-5xl font-extrabold text-gray-800">
            {value}
          </h2>

          <div className="mt-4 flex items-center gap-2 text-green-600 text-sm font-semibold">
            <TrendingUp size={16} />
            <span>Active</span>
          </div>

        </div>

        <div
          className={`
            ${color}
            rounded-2xl
            p-5
            text-white
            shadow-lg
            group-hover:scale-110
            transition-transform
            duration-300
          `}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}