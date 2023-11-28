import React from "react";
import { perks } from "@/lib/constants/perks";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FeatureIconsWithText from "./FeatureIconsWithText";

type FeatureIconsWithTextListType = {
  featuresList: typeof perks;
};
const FeatureIconsWithTextList: React.FC<FeatureIconsWithTextListType> = ({
  featuresList,
}) => {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {featuresList.map((feature) => {
            return (
              <FeatureIconsWithText
                FeatureDetails={feature}
                key={feature.name}
              />
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FeatureIconsWithTextList;
