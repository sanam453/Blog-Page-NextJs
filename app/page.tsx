import * as React from "react";

import { Hero } from "@/components";
import Blog from "./blog-posts/page";
import Loading from "./loading";

export default function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  return (
    <main>
      <Hero />
      <React.Suspense fallback={<Loading />}>
        <Blog searchParams={searchParams} />
      </React.Suspense>
    </main>
  );
}
