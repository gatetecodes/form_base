import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getFormStats } from "@/lib/actions/form";
import { Suspense } from "react";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import CreateFormBtn from "@/components/create-form-btn";

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">Your forms</h2>
      <Separator className="my-6" />
      <CreateFormBtn />
    </div>
  );
}

const CardStatsWrapper = async () => {
  const stats = await getFormStats();
  return <StatsCards loading={false} stats={stats} />;
};

interface StatsCardProps {
  stats?: Awaited<ReturnType<typeof getFormStats>>;
  loading: boolean;
}
const StatsCards = ({ loading, stats }: StatsCardProps) => {
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

const StatsCard = ({
  title,
  value,
  icon,
  helperText,
  loading,
  className,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  helperText: string;
  loading: boolean;
  className: string;
}) => {
  return (
    <Card className={cn(className, "relative")}>
      <CardHeader>
        <CardTitle className="text-xl  font-medium text-muted-foreground">
          {title}
        </CardTitle>{" "}
        <div className="absolute right-2 top-2 opacity-30">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="text-xs text-muted-foreground pt-1">{helperText}</p>
      </CardContent>
    </Card>
  );
};
