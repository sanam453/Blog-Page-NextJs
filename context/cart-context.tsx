"use client";

import * as React from "react";

interface CartContextType {
    slug: string;
    name: string;
    desc: string;
    view: string;
    like: string;
    image: string;
    category: string;
}

const CartContext = React.createContext<{
  items: CartContextType[];
  setItems: React.Dispatch<React.SetStateAction<CartContextType[]>>;
} | null>(null);

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = React.useState<CartContextType[]>([]);
  const contextValue = React.useMemo(() => ({ items, setItems }), [items]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = React.useContext(CartContext);

  if (!context) {
    throw new Error("useCart() must be used within a <CartContextProvider />");
  }
  return context;
}
