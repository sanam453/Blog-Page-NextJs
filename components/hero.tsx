"use client";

import * as React from "react";

// @components
import { Chip } from "@material-tailwind/react";

// hooks
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const CATEGORIES = [
  "food",
  "fashion",
  "trending",
  "travel",
  "lifestyle",
  "music",
  "sports",
  "news",
  "movies",
  "diy",
  "architecture",
];

export function Hero() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = useSearchParams();
  const [isPending, startTransition] = React.useTransition();
  const [optimisticSort, setOptimisticSort] = React.useOptimistic("food");


  const sort = params.get("sort") || "food";

  function onSortChange(value: string) {
    const urlParams = new URLSearchParams(params);

    urlParams.set("sort", value);

    startTransition(() => {
      setOptimisticSort(value);
      replace(`${pathname}?${urlParams.toString()}`);
    });
  }

  return (
    <div className="my-10 container">
      <div className="flex flex-wrap items-center justify-center md:justify-start mb-6 gap-4">
        {CATEGORIES.map((category) => {
          const isActive = isPending
            ? optimisticSort === category
            : sort === category;

          return (
            <Chip
              key={category}
              size="lg"
              className="px-3 py-1.5 cursor-pointer"
              onClick={() => onSortChange(category)}
              variant={isActive ? "solid" : "outline"}
            >
              <Chip.Label className="capitalize">{category}</Chip.Label>
            </Chip>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
