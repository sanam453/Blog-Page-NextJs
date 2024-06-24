import * as React from "react";

//supabase
import { createClient } from "@/lib/supabase/server";

// @components
import { Typography } from "@material-tailwind/react";
import { BlogCard, LatestPosts } from "@/components";
import Favorites from "@/components/favorites";

export async function ContentGrid({ searchParams }: { searchParams: any }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", searchParams?.sort || "food");

  if (error) {
    return (
      <div className="container mx-auto h-[76vh] grid place-items-center">
        <div className="text-center space-y-4">
          <Typography type="h1" className="uppercase" color="error">
            Woopsie daisy!
          </Typography>
          <Typography type="h6">
            Check your code and solve the error :(
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className="my-10 container">
      <section className="grid gap-6 w-full lg:grid-cols-12 grid-cols-6">
        <div className="col-span-9 border-r border-surface pr-8">
          <div className="scroll-mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((product) => (
              <BlogCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="col-span-3">
          <div className="sticky top-10">
            <Favorites />
            <hr className="my-6" />
            <Typography type="p" className="font-bold">
              Latest Posts
            </Typography>
            <LatestPosts />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContentGrid;
