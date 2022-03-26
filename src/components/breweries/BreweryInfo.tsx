import Address from "../common/Address";

import { BreweryType } from "../../types/brewery";

import styles from "./BreweryInfo.module.css";

interface Props {
  brewery: BreweryType;
}

const BreweryInfo = ({ brewery }: Props) => {
  const { street, address_2, address_3, city, state, postal_code } = brewery;
  return (
    <>
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
            <a href={`${brewery.website_url}`} target="_blank" rel="noreferrer">
              {brewery.website_url}
            </a>
          ) : (
            <span>Website Unavailable</span>
          )}
        </div>
      </div>
    </>
  );
};

export default BreweryInfo;
