import { getFormStats } from "@/lib/actions/form";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { LuView } from "react-icons/lu";
import { TbArrowBounce } from "react-icons/tb";
import { StatsCard } from "./StatsCard";

interface StatsCardProps {
  stats?: Awaited<ReturnType<typeof getFormStats>>;
  loading: boolean;
}
export const StatsCards = ({ loading, stats }: StatsCardProps) => {
  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total visits"
        icon={<LuView className="text-blue-600 h-14 w-14" />}
        helperText="All time form visits"
        value={stats?.visits.toLocaleString() ?? ""}
        loading={loading}
        className="shadow shadow-blue-600"
      />
      <StatsCard
        title="Total submissions"
        icon={<FaWpforms className="text-yellow-600 h-14 w-14" />}
        helperText="All time form submissions"
        value={stats?.submissions.toLocaleString() ?? ""}
        loading={loading}
        className="shadow shadow-yellow-600"
      />
      <StatsCard
        title="Submission rate"
        icon={<HiCursorClick className="text-green-600 h-14 w-14" />}
        helperText="Visists that result in form submission"
        value={stats?.submissionRate.toLocaleString() + "%"}
        loading={loading}
        className="shadow shadow-green-600"
      />
      <StatsCard
        title="Bounce rate"
        icon={<TbArrowBounce className="text-red-600 h-14 w-14" />}
        helperText="Visits that leave without interacting with the form"
        value={stats?.visits.toLocaleString() + "%"}
        loading={loading}
        className="shadow shadow-red-600"
      />
    </div>
  );
};
