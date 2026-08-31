"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CartShopping } from "reicon-react";

type CartButtonProps = {
  count?: number;
};

const CartButton = ({ count = 1 }: CartButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative rounded-full transition-all duration-200 hover:bg-emerald-50
      hover:text-emerald-600 hover:-translate-y-0.5 active:translate-y-0
      "
    >
      <Link href={"/cart"}>
        <CartShopping size={32} />

        {count > 0 && (
          <span
            className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center
            justify-center rounded-full bg-emerald-500 px-1 text-[10px]
            font-semibold text-white
            "
          >
            {count}
          </span>
        )}
      </Link>
    </Button>
  );
};

export default CartButton;
