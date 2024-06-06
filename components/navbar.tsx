"use client";

import * as React from "react";
import { Typography, Card, Input } from "@material-tailwind/react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import Favorites from "./favorites";

export function Navbar() {
  return (
    <Card
      as="nav"
      className="mx-auto w-full py-4 lg:px-2 shadow-none rounded-none"
    >
      <div className="flex items-center justify-between container">
        <Typography
          as="a"
          /** @ts-ignore */
          href="#"
          type="p"
          className="font-bold"
        >
          Blogi<span className="text-green-600">fy</span>
        </Typography>
        <div className="flex items-center gap-2">
          <Input size="md" className="md:w-80 rounded-full">
            <Input.Icon>
              {/** @ts-ignore */}
              <MagnifyingGlassIcon className="h-full w-full" />
            </Input.Icon>
            <Input.Field type="search" placeholder="Search here..." />
          </Input>
        </div>
      </div>
    </Card>
  );
}

export default Navbar;
