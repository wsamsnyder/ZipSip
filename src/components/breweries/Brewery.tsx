import { Button } from "@patternfly/react-core";

import { BreweryType } from "../../types/brewery";
import GoogleMap from "../common/map/GoogleMap";
import BreweryInfo from "./BreweryInfo";

import styles from "./Brewery.module.css";

interface Params {
  brewery: BreweryType;
  setIsExpanded: () => void;
  isExpanded: boolean;
}

const Brewery = ({ brewery, setIsExpanded, isExpanded }: Params) => {
  return (
    <div className={styles.brewery}>
      <BreweryInfo brewery={brewery} />
      {isExpanded ? (
        <>
          <GoogleMap
            lat={parseFloat(brewery.latitude)}
            lng={parseFloat(brewery.longitude)}
            name={brewery.name}
          />
          <Button variant="link" onClick={() => setIsExpanded()}>
            Collapse
          </Button>
        </>
      ) : (
        <Button variant="link" onClick={() => setIsExpanded()}>
          Expand
        </Button>
      )}
    </div>
  );
};

export default Brewery;
