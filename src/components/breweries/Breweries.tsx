import { useState } from "react";

import Brewery from "./Brewery";

import { BreweryType } from "../../types/brewery";

interface Params {
  breweries: BreweryType[];
  haveSearched: boolean;
}

interface Expanded {
  [id: string]: boolean;
}

const Breweries = ({ breweries, haveSearched }: Params) => {
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
      {haveSearched && !breweries.length ? (
        <span>No Breweries in the Search Area</span>
      ) : null}
    </>
  );
};

export default Breweries;
