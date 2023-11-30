import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import FeatureIconsWithTextList from "@/components/ui/FeatureCardWithLogo/FeatureIconsWithTextList";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography/Typography";
import { perks } from "@/lib/constants/perks";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <Typography variant="HeroText" attribute="h1">
            Your marketplace for high quality{" "}
            <span className="text-blue-600">digital assets</span>
          </Typography>

          <Typography
            variant="paragraphMuted"
            fontSize="lg"
            className="mt-6 max-w-prose"
            attribute="p"
          >
            {" "}
            Welcome to Digitalippo. Every asset in our platform is verified by
            our team to ensure our highest quality standards.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/products"}>
              <Button variant={"default"} className="bg-blue-600">
                Browse Trending
              </Button>
            </Link>
            <Button variant={"ghost"}>Our Quality promise &rarr;</Button>
          </div>
        </div>
        <ProductReel />
      </MaxWidthWrapper>
      <FeatureIconsWithTextList featuresList={perks} />
    </>
  );
}
