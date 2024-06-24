"use client";

import * as React from "react";

// @components
import Link from "next/link";
import Image from "next/image";
import { Button, Card, Tooltip, Typography } from "@material-tailwind/react";

// @icons
import { HeartIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon, EyeIcon } from "@heroicons/react/24/outline";

// @hooks
import { useCart } from "@/context/cart-context";
import { Skeleton } from "@nextui-org/skeleton";

export function BlogCard({ product }: { product: any }) {
  const { items, setItems } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  const isItemInCart = React.useMemo(
    () => items.some((item) => item.slug === product?.slug),
    [items, product?.slug]
  );

  function addToSave(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    const cartItem = {
      slug: product?.slug,
      name: product?.name,
      desc: product?.desc,
      view: product?.view,
      like: product?.like,
      image: product?.image,
      category: product?.category,
    };

    setItems((prev) => {
      if (isItemInCart) {
        return prev.filter((item) => item.slug !== product?.slug);
      }

      return [...prev, cartItem];
    });
  }

  return (
    <Card
      data-hover={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group rounded-lg"
    >
      <Card.Header className="m-0 w-full h-full min-h-[16rem]">
        <Image
          width={512}
          height={512}
          alt="image"
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out"
          src={product?.image}
        />
      </Card.Header>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-data-[hover=true]:from-black/80 group-data-[hover=true]:via-black/70 group-data-[hover=true]:to-black/70"></div>
      <div className="absolute inset-0 translate-y-[60%] text-center grid place-items-center transition-all duration-500 group-data-[hover=true]:translate-y-0">
        <div className="flex gap-2">
          <Tooltip>
            <Tooltip.Trigger>
              <Button
                as={Link}
                size="sm"
                // @ts-ignore
                href={`/blog-page/${product?.slug}`}
                color="secondary"
                className="relative z-30 rounded-full py-2.5"
              >
                {/** @ts-ignore */}
                <EyeIcon className="w-5 h-5 stroke-2" />
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content className="py-2.5 text-primary-foreground">
              <Typography className="data-[type=p]:font-semibold">
                Preview
              </Typography>
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Trigger
              className="rounded-full px-2.5 py-1.5"
              color="secondary"
              as={Button}
              onClick={addToSave}
            >
              {/** @ts-ignore */}
              <BookmarkIcon className="w-5 h-5 stroke-2" />
            </Tooltip.Trigger>
            <Tooltip.Content className="px-2.5 py-1.5 text-primary-foreground">
              <Typography className="data-[type=p]:font-semibold">
                {isItemInCart ? "Unsave" : "Save"}
              </Typography>
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
        </div>
      </div>
      <Card.Body className="absolute grid items-end inset-0 transition-all duration-500 translate-y-0 group-data-[hover=true]:translate-y-[50%]">
        <div className="flex items-end gap-4 justify-between">
          <div className="grid gap-1">
            <Typography type="small" color="secondary" className="font-bold">
              {product?.name}
            </Typography>
            <Typography type="small" color="secondary" className="font-normal">
              {product?.desc}
            </Typography>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              {/** @ts-ignore */}
              <HeartIcon className="h-4 w-4 text-white" />
              <Typography type="small" color="secondary" className="font-bold">
                {product?.like}
              </Typography>
            </div>
            <div className="flex items-center gap-1">
              {/** @ts-ignore */}
              <EyeIcon className="h-4 w-4 text-white" />
              <Typography type="small" color="secondary" className="font-bold">
                {product?.view}
              </Typography>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export function BlogCardLoading() {
  return (
    <div className="container mx-auto mb-10 space-y-4 px-0">
      <div className="space-y-4">
        <Card className="w-[288px] h-[417px] relative z-0 p-2 rounded-lg shadow-none">
          <Skeleton className="rounded-lg bg-stone-300">
            <div className="h-[400px]" />
          </Skeleton>
          <Skeleton className="rounded-lg w-40 bg-stone-200 absolute z-10 inset-0 mx-4 h-3 translate-y-[344px]"></Skeleton>
          <Skeleton className="rounded-lg w-20 bg-stone-200 absolute z-10 inset-0 mx-4 h-3 translate-y-[366px]"></Skeleton>
        </Card>
        <Card className="w-[286px] h-[417px] relative z-0 p-2 rounded-lg shadow-none">
          <Skeleton className="rounded-lg bg-stone-300">
            <div className="h-[400px]" />
          </Skeleton>
          <Skeleton className="rounded-lg w-40 bg-stone-200 absolute z-10 inset-0 mx-4 h-3 translate-y-[344px]"></Skeleton>
          <Skeleton className="rounded-lg w-20 bg-stone-200 absolute z-10 inset-0 mx-4 h-3 translate-y-[366px]"></Skeleton>
        </Card>
      </div>
    </div>
  );
}

export function LatestCardLoading() {
  return (
    <div className="flex flex-col">
      <Card className="w-[286px] h-[57px] relative z-0 p-2 rounded-lg shadow-none">
        <Skeleton className="rounded-lg bg-stone-300">
          <div className="h-[39px]" />
        </Skeleton>
        <Skeleton className="rounded-lg w-32 bg-stone-200 absolute z-10 inset-0 mx-auto h-3 translate-y-[22px]"></Skeleton>
      </Card>
      <Skeleton className="rounded-lg w-32 bg-stone-200 h-3 mt-12 mb-6"></Skeleton>
      <div className="space-y-4 grid">
        <Card className="w-[286px] h-[223px] p-2 rounded-lg shadow-none">
          <Skeleton className="rounded-lg bg-stone-300">
            <div className="h-[122px]" />
          </Skeleton>
          <Skeleton className="rounded-lg w-16 bg-stone-200 h-3 my-4"></Skeleton>
          <Skeleton className="rounded-lg w-20 bg-stone-200 h-3 mb-3"></Skeleton>
          <Skeleton className="rounded-lg w-24 bg-stone-200 h-3"></Skeleton>
        </Card>
        <Card className="w-[286px] h-[223px] p-2 rounded-lg shadow-none">
          <Skeleton className="rounded-lg bg-stone-300">
            <div className="h-[122px]" />
          </Skeleton>
          <Skeleton className="rounded-lg w-16 bg-stone-200 h-3 my-4"></Skeleton>
          <Skeleton className="rounded-lg w-20 bg-stone-200 h-3 mb-3"></Skeleton>
          <Skeleton className="rounded-lg w-24 bg-stone-200 h-3"></Skeleton>
        </Card>
        <Card className="w-[286px] h-[223px] p-2 rounded-lg shadow-none">
          <Skeleton className="rounded-lg bg-stone-300">
            <div className="h-[122px]" />
          </Skeleton>
          <Skeleton className="rounded-lg w-16 bg-stone-200 h-3 my-4"></Skeleton>
          <Skeleton className="rounded-lg w-20 bg-stone-200 h-3 mb-3"></Skeleton>
          <Skeleton className="rounded-lg w-24 bg-stone-200 h-3"></Skeleton>
        </Card>
      </div>
    </div>
  );
}
