"use server";

import { createClient } from "@/lib/supabase/server";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/solid";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Loading from "./loading";

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: any;
}) {
  const { slug } = params;

  if (!slug) {
    notFound();
  }

  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    return <div>Error</div>;
  }

  return (
    <React.Suspense fallback={<Loading />}>
      <section className="mb-10 container mx-auto">
        <Button
          as={Link}
          // @ts-ignore
          href="/"
          size="sm"
          variant="ghost"
          className="flex gap-2 items-center max-w-fit mt-8 mb-4"
        >
          <ArrowLeftIcon className="h-3 w-3 stroke-2" />
          Back to Templates
        </Button>
        <div className="!mx-auto relative">
          <div className="absolute inset-0 rounded-lg bg-no-repeat h-72 w-full bg-[url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
            <div className="to-bg-primary/40 absolute rounded-lg inset-0 h-full w-full bg-black/65" />
          </div>
          <div className="relative px-6 pt-36">
            <Typography
              type="h4"
              className="mb-2 font-bold text-white leading-[1.5]"
            >
              See your products here with full details
            </Typography>
            <Typography type="p" className=" text-gray-100 max-w-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              ipsum? Ipsam cum error illum eum, neque impedit laboriosam
              adipisci suscipit?
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:mt-32 sm:mt-32 mt-20 lg:mt-24">
            <Image
              height={512}
              width={512}
              alt="food"
              className="md:h-96 md:w-96 w-full h-60 object-cover rounded-lg"
              src={data?.image}
            />
            <div>
              <Typography type="h5" className="font-bold">
                {data?.name}
              </Typography>
              <Typography type="p" className="mb-2">
                {data?.desc}
              </Typography>
              <Typography type="p" className="lg:max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sed rem omnis autem obcaecati dolor saepe? Quod, libero? Porro
                excepturi obcaecati a asperiores officiis reprehenderit commodi
                labore magnam mollitia odit! Quisquam quaerat dolor perferendis
                quas aliquid labore veritatis nemo totam.
              </Typography>{" "}
              <br />
              <Typography type="p" className="lg:max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sed rem omnis autem obcaecati dolor saepe? Quod, libero? Porro
                excepturi obcaecati a asperiores officiis reprehenderit commodi
                labore magnam mollitia odit! Quisquam quaerat dolor perferendis
                quas aliquid labore veritatis nemo totam.
              </Typography>
              <div className="flex items-end gap-4 justify-between mt-6">
                <Typography type="small" className="font-bold" color="primary">
                  {data?.name}
                </Typography>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1">
                    <HeartIcon className="h-4 w-4" />
                    <Typography
                      type="small"
                      className="font-semibold text-foreground"
                    >
                      {data?.like}
                    </Typography>
                  </div>
                  <div className="flex items-center gap-1">
                    {/** @ts-ignore */}
                    <EyeIcon className="h-4 w-4" />
                    <Typography
                      type="small"
                      className="font-semibold text-foreground"
                    >
                      {data?.view}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Suspense>
  );
}

