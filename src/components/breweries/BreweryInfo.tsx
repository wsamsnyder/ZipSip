import React from "react";

import Address from "../common/Address";
import { BreweryType } from "../../types/brewery";
import { isValidLocation } from "../utils";

import styles from "./BreweryInfo.module.css";

interface Props {
  brewery: BreweryType;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

const BreweryInfo = React.forwardRef(
  (
    { brewery, onSelect, isSelected }: Props,
    ref: React.LegacyRef<HTMLDivElement>
  ) => {
    const { street, address_2, address_3, city, state, postal_code } = brewery;
    return (
      <div
        ref={ref}
        className={isSelected ? styles.selected : styles.brewery}
        onClick={() => onSelect(brewery.id)}
      >
        <div className={styles.name}>
          <span>{brewery.name}</span>
        </div>
        <div className={styles.details}>
          <div className={styles.contact}>
            <Address
              street={street}
              add1={address_2}
              add2={address_3}
              city={city}
              state={state}
              zip={postal_code?.split("-")[0]}
            />
          </div>
          <div className={styles.info}>
            <span>Type: {brewery.brewery_type}</span>
            {brewery.website_url ? (
              <a
                href={`${brewery.website_url}`}
                target="_blank"
                rel="noreferrer"
              >
                {brewery.website_url}
              </a>
            ) : (
              <span>Website Unavailable</span>
            )}
          </div>
          {!isValidLocation({
            lat: parseFloat(brewery.latitude),
            lng: parseFloat(brewery.longitude),
          }) && "Not Displayed in Map"}
        </div>
      </div>
    );
  }
);

export default BreweryInfo;
