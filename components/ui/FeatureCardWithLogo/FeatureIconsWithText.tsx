import { perks } from "@/lib/constants/perks";
import React from "react";
import { Typography } from "../typography/Typography";

type FeatureIconsWithTextType = {
  FeatureDetails: (typeof perks)[number];
};

const FeatureIconsWithText: React.FC<FeatureIconsWithTextType> = ({
  FeatureDetails,
}) => {
  return (
    <div
      className="text-center md:flex md:items-start md:text-left lg:block
                  lg:text-center "
      key={FeatureDetails.name}
    >
      <div className="md:flex-shrink-0 flex justify-center">
        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
          {<FeatureDetails.Icon className="w-1/3 h-1/3" />}
        </div>
      </div>
      <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
        <h3 className="text-base font-medium text-grey-900">
          {FeatureDetails.name}
        </h3>
        <Typography
          variant="paragraphMuted"
          fontSize="sm"
          className="mt-3"
          attribute="p"
        >
          {FeatureDetails.description}
        </Typography>
      </div>
    </div>
  );
};

export default FeatureIconsWithText;
