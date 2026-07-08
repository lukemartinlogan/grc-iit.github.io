import Heading from "@theme/Heading";
import React, { PropsWithChildren } from "react";

function SectionHeader({ children }: PropsWithChildren) {
  return (
    <div className="container padding-bottom--lg padding-top--md">
      <Heading as="h2" className="text--center">
        {children}
      </Heading>
    </div>
  );
}

export default SectionHeader;
