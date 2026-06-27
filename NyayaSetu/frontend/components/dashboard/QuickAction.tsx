import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function QuickAction({
  title,
  description,
  href,
}: Props) {
  return (
    <Link href={href}>
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          bg-white
          border
          border-gray-100
          p-6
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-2xl
          cursor-pointer
        "
      >
        {/* Decorative Circle */}
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-100 opacity-40 group-hover:scale-125 transition-transform duration-500"></div>

        <div className="relative">

          <h2 className="text-2xl font-bold text-blue-700">
            {title}
          </h2>

          <p className="mt-3 text-gray-600 leading-7">
            {description}
          </p>

          <div className="mt-6 flex items-center justify-between">

            <span className="text-sm font-semibold text-blue-600">
              Open Module
            </span>

            <div className="rounded-full bg-blue-700 p-2 text-white group-hover:translate-x-2 transition-transform duration-300">
              <ArrowRight size={18} />
            </div>

          </div>

        </div>

      </div>
    </Link>
  );
}