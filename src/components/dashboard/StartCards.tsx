"use client";
import { getFormStats } from "@/lib/actions/form";
import { StatsCard } from "./StatsCard";
import { Icon } from "@iconify/react";

interface StatsCardProps {
  stats?: Awaited<ReturnType<typeof getFormStats>>;
  loading: boolean;
}
export const StatsCards = ({ loading, stats }: StatsCardProps) => {
  return (
    <div className="w-full rounded-[30px] border-[1.5px] border-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total visits"
        icon={<Icon icon="lets-icons:view" className="text-gray-900 h-8 w-8" />}
        helperText="All time form visits"
        value={stats?.visits.toLocaleString() ?? ""}
        loading={loading}
        className="bg-tranparent"
        iconBackground="lightestGreen"
      />
      <StatsCard
        title="Total submissions"
        icon={
          <Icon
            icon="material-symbols:upload"
            className="text-gray-700 h-8 w-8"
          />
        }
        helperText="All time form submissions"
        value={stats?.submissions.toLocaleString() ?? ""}
        loading={loading}
        className="bg-transparent"
        iconBackground="lightGreen"
      />
      <StatsCard
        title="Submission rate"
        icon={
          <Icon icon="iconamoon:trend-up" className="text-gray-700 h-8 w-8" />
        }
        helperText="Visists that result in form submission"
        value={stats?.submissionRate.toLocaleString() + "%"}
        loading={loading}
        className="bg-transparent"
        iconBackground="lightPurple"
      />
      <StatsCard
        title="Bounce rate"
        icon={
          <Icon
            icon="tabler:bounce-right-filled"
            className="text-gray-700 h-8 w-8"
          />
        }
        helperText="Visits that leave without interacting with the form"
        value={stats?.visits.toLocaleString() + "%"}
        loading={loading}
        className="bg-transparent"
        iconBackground="cardSand"
      />
    </div>
  );
};
