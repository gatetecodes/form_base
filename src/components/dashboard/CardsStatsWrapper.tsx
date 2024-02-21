import { getFormStats } from "@/lib/actions/form";
import { StatsCards } from "./StartCards";

export const CardStatsWrapper = async () => {
  const stats = await getFormStats();
  return <StatsCards loading={false} stats={stats} />;
};
