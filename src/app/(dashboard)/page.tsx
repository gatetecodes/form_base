import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import CreateFormBtn from "@/components/create-form-btn";
import { CardStatsWrapper } from "@/components/dashboard/CardsStatsWrapper";
import FormCardSkeleton from "@/components/dashboard/FormCardSkeleton";
import { FormCards } from "@/components/dashboard/FormCards";
import { StatsCards } from "@/components/dashboard/StartCards";

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">Your forms</h2>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CreateFormBtn />
        <Suspense
          fallback={[1, 2, 3, 4].map((el) => (
            <FormCardSkeleton key={el} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </div>
  );
}
