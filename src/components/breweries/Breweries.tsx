import { useState } from "react";

import Brewery from "./Brewery";

import { BreweryType } from "../../types/brewery";

interface Params {
  breweries: BreweryType[];
}

interface Expanded {
  [id: string]: boolean;
}

const Breweries = ({ breweries }: Params) => {
  const [expandedMap, setExpandedMap] = useState<Expanded>({});

  const handleExpand = (id: string) => {
    setExpandedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {breweries.map((brewery) => (
        <Brewery
          key={brewery.id}
          brewery={brewery}
          isExpanded={expandedMap[brewery.id]}
          setIsExpanded={() => handleExpand(brewery.id)}
        />
      ))}
    </>
  );
};

export default Breweries;
