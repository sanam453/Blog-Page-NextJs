import * as React from "react";

//supabase
import { createClient } from "@/lib/supabase/server";
// import { createClient } from "@supabase/supabase-js";

// @components
import { Typography } from "@material-tailwind/react";
import { BlogCard } from "@/components";
import Favorites from "@/components/favorites";
import LatestPosts from "./components/latest-posts";
import Loading from "../loading";

// data
// const latestPostData = [
//   {
//     img: "https://images.unsplash.com/photo-1716154220640-3d4985aa841a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     tag: "Animal",
//     title: "Flamingo",
//     desc: "American Red Bird",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     tag: "Food",
//     title: "Biryani",
//     desc: "Chicken Biryani",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=3182&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     tag: "Trending",
//     title: "Pink Sun Glasses",
//     desc: "Stylish Sun Glasses",
//   },
// ];

export async function Blog({ searchParams }: { searchParams: any }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", searchParams?.sort || "food");

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="my-10 container">
      <section className="grid gap-6 lg:grid-cols-12 grid-cols-6 container">
        <div className="col-span-9 border-r border-surface pr-8">
          <div className="scroll-mt-4 grid lg:grid-cols-3 gap-4">
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
            {data.map((product) => (
              <LatestPosts key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
