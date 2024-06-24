import { Card } from "@material-tailwind/react";
import { Skeleton } from "@nextui-org/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto mt-[36px] mb-6">
      <Skeleton className="rounded-lg w-40 bg-stone-200 h-6 mb-4"></Skeleton>
      <Card className="w-full h-[306px] relative z-0 shadow-none border-0">
        <Skeleton className="rounded-lg bg-stone-300">
          <div className="h-[288px]" />
        </Skeleton>
        <Skeleton className="rounded-lg w-[600px] bg-stone-200 absolute z-10 inset-0 mx-4 h-4 translate-y-[166px]"></Skeleton>
        <Skeleton className="rounded-lg w-[800px] bg-stone-200 absolute z-10 inset-0 mx-4 h-3 translate-y-[204px]"></Skeleton>
        <Skeleton className="rounded-lg w-[500px] bg-stone-200 absolute z-10 inset-0 mx-4 h-3 translate-y-[226px]"></Skeleton>
      </Card>
      <div className="flex gap-[32px] mt-6">
        <Card className="w-[384px] h-[384px] rounded-lg shadow-none border-0">
          <Skeleton className="rounded-lg bg-stone-300">
            <div className="h-[384px]" />
          </Skeleton>
        </Card>
        <Card className="mt-4 w-[484px] h-[384px] rounded-lg shadow-none border-0">
          <Skeleton className="rounded-lg w-20 bg-stone-200 h-4 mb-3"></Skeleton>
          <Skeleton className="rounded-lg w-40 bg-stone-200 h-4 mb-4"></Skeleton>
          <div className="grid gap-2">
          <Skeleton className="rounded-lg w-full bg-stone-200 h-4"></Skeleton>
          <Skeleton className="rounded-lg w-full bg-stone-200 h-4"></Skeleton>
          <Skeleton className="rounded-lg w-full bg-stone-200 h-4"></Skeleton>
          <Skeleton className="rounded-lg w-full bg-stone-200 h-4"></Skeleton>
          <Skeleton className="rounded-lg w-full bg-stone-200 h-4"></Skeleton>
          <Skeleton className="rounded-lg w-full bg-stone-200 h-4"></Skeleton>
          <Skeleton className="rounded-lg w-full bg-stone-200 h-4"></Skeleton>
          <Skeleton className="rounded-lg w-full bg-stone-200 h-4"></Skeleton>
          <Skeleton className="rounded-lg w-full bg-stone-200 h-4"></Skeleton>
          <Skeleton className="rounded-lg w-full bg-stone-200 h-4"></Skeleton>
          <Skeleton className="rounded-lg w-full bg-stone-200 h-4"></Skeleton>
          <Skeleton className="rounded-lg w-full bg-stone-200 h-4"></Skeleton>
          </div>
        </Card>
      </div>
    </div>
  );
}
