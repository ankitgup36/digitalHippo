"use client";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { PRODUCT_CATEGORIES } from "@/lib/constants/config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}
const NavItem = ({ isAnyOpen, isOpen, handleOpen, category }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className=" gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground")}
          />
        </Button>
      </div>
      {
        isOpen ? (
          <div className={cn(" absolute inset-x-0 top-full text-sm text-muted-foreground", {
            "animate-in fade-in-10 slide-in-from-top-5" : isAnyOpen
          })}>
            <div className="absolute inset-0 top-1/5 bg-white shadow">
              <div className="bg-white relative">
                <div className="mx-auto max-w-7xl px-8">
                  <div className="grid grid-cols-4 gap-x-8 gap-y-15 py-16">
                    <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                      {category.feature.map((item)=>{
                        return <div key={item.name} className="group relative text-base sm:text-sm">
                        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-5">
                          <Image src={item.imageSrc} alt="product category image" fill className="object-cover object-center"/>
                        </div>
                        <Link href={item.href} className="mt-6 block font-medium text-gray-900">{item.name}</Link>
                        <p className="mt-1"> Shop now</p>
                        </div>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </div>
  );
};

export default NavItem;
