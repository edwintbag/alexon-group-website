"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Product } from "../lib/products";

export interface CartItem extends Product {
  qty: number;
  rawPrice: number;
}

interface CartContextValue {
  cart: CartItem[];
  cartCount: number;
  cartOpen: boolean;
  notify: string | null;
  addToCart: (product: Product) => void;
  updateQty: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  setCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [notify, setNotify] = useState<string | null>(null);

  const addToCart = useCallback((product: Product) => {
    setCart((c) => {
      const existing = c.find((i) => i.id === product.id);
      if (existing) {
        return c.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      const raw = parseFloat(product.price.replace(/[^0-9.]/g, "")) || 0;
      return [...c, { ...product, qty: 1, rawPrice: raw }];
    });
    setNotify(`${product.name} added to cart`);
    setTimeout(() => setNotify(null), 2500);
  }, []);

  const updateQty = useCallback((id: number, delta: number) => {
    setCart((c) =>
      c.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
    );
  }, []);

  const removeItem = useCallback((id: number) => {
    setCart((c) => c.filter((i) => i.id !== id));
  }, []);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartOpen,
        notify,
        addToCart,
        updateQty,
        removeItem,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
