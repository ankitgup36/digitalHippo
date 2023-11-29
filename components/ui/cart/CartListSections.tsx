import React from "react";
import { Separator } from "../separator";
import { formatPrice } from "@/lib/utils";
import { SheetFooter, SheetTrigger } from "../sheet";
import Link from "next/link";
import { buttonVariants } from "../button";
import { CurrencyType } from "@/lib/types";

interface CartListSectionType extends CurrencyType {
  transactionFee: number | string;
  cartLink: string;
}
const CartListSections: React.FC<CartListSectionType> = ({
  transactionFee,
  currency,
  cartLink,
  notation,
}) => {
  return (
    <>
      <div className="flex w-full flex-col pr-6">Cart items</div>
      <div className="space-y-4 pr-6">
        <Separator />
        <div className="space-y-1.5 text-sm">
          <div className="flex">
            <span className="flex-1 ">Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex">
            <span className="flex-1 ">Transaction Fee</span>
            <span>{formatPrice(transactionFee, { currency, notation })}</span>
          </div>
        </div>
        <SheetFooter>
          <SheetTrigger asChild>
            <Link
              href={cartLink}
              className={buttonVariants({ className: "w-full" })}
            >
              Go To Cart
            </Link>
          </SheetTrigger>
        </SheetFooter>
      </div>
    </>
  );
};

export default CartListSections;
