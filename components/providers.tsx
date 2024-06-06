"use client";

import * as React from "react";

// @components
import { CartContextProvider } from "@/context/cart-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CartContextProvider>{children}</CartContextProvider>
    </>
  );
}
