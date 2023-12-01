import AddToCartButton from "@/components/AddToCartItem";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { PRODUCT_CATEGORIES } from "@/lib/constants/config";
import { formatPrice } from "@/lib/utils";
import { Check, Shield } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    productId: string;
  };
}

const BREADCRUMBS = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Products", href: "/products" },
];

const Page = async ({ params }: PageProps) => {
  const { productId } = params;

  const product = {
    id: "2",
    name: "string",
    price: 30,
    category: "ui_kits",
    product_files: "a",
    images: [
      {
        image:
          "data:image/jpeg;base64,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",
      },
      {
        image:
          "data:image/jpeg;base64,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",
      },
      {
        image:
          "data:image/jpeg;base64,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",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit perferendis cupiditate odit tempore accusantium nemo impedit, magni nostrum illo id, veniam expedita sequi unde! Rem iure vitae fugiat? Recusandae?",
    updatedAt: "today",
    createdAt: "today",
  };

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category,
  )?.label;

  const validUrls = product.images
    .map(({ image }) => (typeof image === "string" ? image : image?.url))
    .filter(Boolean) as string[];

  return (
    <MaxWidthWrapper className="bg-white">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product Details */}
          <div className="lg:max-w-lg lg:self-end">
            <ol className="flex items-center space-x-2">
              {BREADCRUMBS.map((breadcrumb, i) => (
                <li key={breadcrumb.href}>
                  <div className="flex items-center text-sm">
                    <Link
                      href={breadcrumb.href}
                      className="font-medium text-sm text-muted-foreground hover:text-gray-900"
                    >
                      {breadcrumb.name}
                    </Link>
                    {i !== BREADCRUMBS.length - 1 ? (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h1>
            </div>

            <section className="mt-4">
              <div className="flex items-center">
                <p className="font-medium text-gray-900">
                  {formatPrice(product.price, {})}
                </p>

                <div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">
                  {label}
                </div>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="mt-6 flex items-center">
                <Check
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500"
                />
                <p className="ml-2 text-sm text-muted-foreground">
                  Eligible for instant delivery
                </p>
              </div>
            </section>
          </div>

          {/* Product images */}
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-square rounded-lg">
              <ImageSlider urls={validUrls} />
            </div>
          </div>

          {/* add to cart part */}
          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            <div>
              <div className="mt-10">
                <AddToCartButton product={product} />
              </div>
              <div className="mt-6 text-center">
                <div className="group inline-flex text-sm text-medium">
                  <Shield
                    aria-hidden="true"
                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400"
                  />
                  <span className="text-muted-foreground hover:text-gray-700">
                    30 Day Return Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductReel
        href="/products"
        query={{ category: product.category, limit: 4 }}
        title={`Similar ${label}`}
        subtitle={`Browse similar high-quality ${label} just like '${product.name}'`}
      />
    </MaxWidthWrapper>
  );
};

export default Page;
