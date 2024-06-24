import * as React from "react";

import { Hero, ContentGrid } from "./components";
import { BlogCardLoading, LatestCardLoading } from "@/components";

export default function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  return (
    <main className="group animate-in fade-in duration-500">
      <Hero />
      <div className="group-has-[[data-loading]]:block animate-in fade-in hidden duration-500">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="flex gap-4">
          {[...Array(3)].map((_, index) => (
            <BlogCardLoading key={index} />
          ))}
          <div className="pl-12">
          <LatestCardLoading />
          </div>
          </div>
        </div>
      </div>
      <div className="group-has-[[data-loading]]:hidden animate-in fade-in duration-500 block">
        <ContentGrid searchParams={searchParams} />
      </div>
    </main>
  );
}
