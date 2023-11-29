import { ShoppingCart } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { formatPrice } from "../lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import EmptyCartSection from "./ui/cart/EmptyCartSection";
import CartListSections from "./ui/cart/CartListSections";

const Cart = () => {
  const itemCount = 10;
  const fee = 1;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart className="h-6 w-6 flex-shrink-0 text-grey-400 group-hover:text-gray-500" />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
          {itemCount > 0 ? (
            <CartListSections
              transactionFee={10}
              currency="INR"
              cartLink="/cart"
            />
          ) : (
            <EmptyCartSection
              imgAlt="empty shopping page"
              imgUrl="/hippo-empty-cart.png"
              linkHref="/products"
              linkText="Add items to your cart to checkout."
            />
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
