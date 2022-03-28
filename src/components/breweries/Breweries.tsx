import React, { useEffect } from "react";

import BreweryInfo from "./BreweryInfo";

import { BreweryType } from "../../types/brewery";

import styles from "./Breweries.module.css";
import { Button } from "@patternfly/react-core";

interface Refs {
  [id: string]: React.RefObject<HTMLDivElement>;
}

interface Params {
  breweries: BreweryType[];
  haveSearched: boolean;
  onSelect: (id: string) => void;
  selectedItem: string;
  loadMore: () => void;
  loadedAllBreweries: boolean;
}

const Breweries = ({
  breweries,
  haveSearched,
  onSelect,
  selectedItem,
  loadMore,
  loadedAllBreweries,
}: Params) => {
  const refs: Refs = breweries.reduce(
    (accum, brewery) => ({
      ...accum,
      [brewery.id]: React.createRef(),
    }),
    {}
  );

  useEffect(() => {
    refs?.[selectedItem]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [selectedItem, refs]);

  return (
    <div className={styles.breweries}>
      {breweries.map((brewery) => (
        <BreweryInfo
          key={brewery.id}
          ref={refs[brewery.id]}
          isSelected={brewery.id === selectedItem}
          brewery={brewery}
          onSelect={onSelect}
        />
      ))}
      {haveSearched && breweries.length && !loadedAllBreweries ? (
        <Button onClick={loadMore}>Load More</Button>
      ) : haveSearched && !breweries.length ? (
        <span>No Breweries in the Search Area</span>
      ) : loadedAllBreweries ? (
        <span>All Breweries Loaded</span>
      ) : null}
    </div>
  );
};

export default Breweries;
