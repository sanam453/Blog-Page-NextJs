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

export function BlogCard({ product }: { product: any }) {
  const { items, setItems } = useCart();

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
    <Card className="relative group rounded-lg">
      <Card.Header className="m-0 w-full h-full min-h-[16rem]">
        <Image
          width={512}
          height={512}
          alt="image"
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out"
          src={product?.image}
        />
      </Card.Header>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/70 group-hover:to-black/70"></div>
      <div className="absolute inset-0 translate-y-[60%] text-center grid place-items-center transition-all duration-500 group-hover:translate-y-0">
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
            <Tooltip.Trigger className="rounded-full px-2.5 py-1.5" color="secondary" as={Button} onClick={addToSave}>
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
      <Card.Body className="absolute grid items-end inset-0 transition-all duration-500 translate-y-0 group-hover:translate-y-[50%]">
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
