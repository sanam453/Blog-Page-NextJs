// @components
import { BlogCardLoading, LatestCardLoading } from "@/components";

// @skeleton-ui
import { Skeleton } from "@nextui-org/skeleton";

export default function Loading() {
  return (
    <main className="mt-10 container">
      <div className="flex gap-4">
      {[...Array(11)].map((_, index) => (
        <Skeleton
          key={index}
          className="rounded-full w-[100px] bg-stone-200 h-10"/>
      ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        <div className="flex gap-4">
          {[...Array(3)].map((_, index) => (
            <BlogCardLoading key={index} />
          ))}
          <div className="pl-10">
            <LatestCardLoading />
          </div>
        </div>
      </div>
    </main>
  );
}
