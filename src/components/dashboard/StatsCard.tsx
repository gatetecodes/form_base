import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const StatsCard = ({
  title,
  value,
  icon,
  iconBackground,
  helperText,
  loading,
  className,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBackground: string;
  helperText: string;
  loading: boolean;
  className: string;
}) => {
  return (
    <Card
      className={cn(
        className,
        "relative p-5 border-none flex items-center gap-5 rounded-none"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center flex-col p-2 rounded-xl",
          iconBackground
        )}
      >
        {icon}
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-mutedText leading-[0.5] mt-3">
          {title}
        </h2>
        <div className="text-4xl text-white font-medium">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
      </div>
    </Card>
  );
};
