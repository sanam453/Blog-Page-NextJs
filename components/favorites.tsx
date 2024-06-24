"use client";

import * as React from "react";
import Image from "next/image";
import {
  Card,
  IconButton,
  MenuItem,
  Typography,
} from "@material-tailwind/react";

// @hooks
import { useCart } from "@/context/cart-context";
import {
  EyeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

function Favorites() {
  const { items, setItems } = useCart();

  function onRemoveItem(slug: string) {
    setItems((prev) => prev.filter((item) => item.slug !== slug));
  }

  const isItems = items.length > 0;

  return (
    <div className="space-y-2">
      {isItems ? (
        items.map(({ name, desc, image, like, view, slug, category }) => (
          <MenuItem
            as={Link}
            key={slug}
            className="flex gap-3 relative items-center"
            // @ts-ignore
            href={`/blog-page/${slug}`}
          >
            <Image
              width={100}
              height={100}
              alt="image"
              className="h-32 w-36 shadow-sm rounded-md object-cover"
              src={image}
            />
            <div>
              <Typography
                type="small"
                color="primary"
                className="block font-semibold"
              >
                {name}
              </Typography>
              <Typography
                type="small"
                className="block font-normal text-foreground"
              >
                {desc}
              </Typography>
              <Typography
                type="small"
                className="block font-semibold capitalize text-foreground"
              >
                category: {category}
              </Typography>
              <div className="flex gap-2 mt-6">
                <Typography
                  type="small"
                  className="flex items-center gap-1 text-sm text-primary font-normal"
                >
                  {/** @ts-ignore */}
                  <HeartIcon className="h-4 w-4" />
                  {like}
                </Typography>
                <Typography
                  type="small"
                  className="flex items-center gap-1 text-sm text-primary font-normal"
                >
                  {/** @ts-ignore */}
                  <EyeIcon className="h-4 w-4 stroke-2" />
                  {view}
                </Typography>
              </div>
            </div>
            <IconButton
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 min-w-[22px] min-h-[22px]"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();

                onRemoveItem(slug);
              }}
            >
              {/** @ts-ignore */}
              <XMarkIcon className="h-4 w-4 stroke-2" />
            </IconButton>
          </MenuItem>
        ))
      ) : (
        <Card variant="ghost" color="primary" className="px-1 py-4">
          <Typography
            type="small"
            color="primary"
            className="text-center font-semibold block"
          >
            Add items here...
          </Typography>
        </Card>
      )}
    </div>
  );
}

export default Favorites;
