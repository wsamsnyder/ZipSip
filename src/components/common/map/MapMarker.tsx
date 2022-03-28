import { useState } from "react";

import { Popover } from "@patternfly/react-core";
import { MapPin } from "react-feather";

import styles from "./MapMarker.module.css";

interface Props {
  id: string;
  text: string;
  lat: number;
  lng: number;
  isVisible: boolean;
  onClick: (id: string) => void;
  onPopoverClose: (id: string) => void;
}

const MapMarker = ({
  id,
  text,
  lng,
  lat,
  isVisible: isVisibleProp = false,
  onClick,
  onPopoverClose,
}: Props) => {
  const handlePopoverClose = () => {
    onPopoverClose(id);
  };

  const handleMarkerClick = () => {
    onClick(id);
  };

  return (
    <Popover
      isVisible={isVisibleProp}
      bodyContent={text}
      hasAutoWidth
      shouldClose={handlePopoverClose}
    >
      <MapPin
        className={styles.pin}
        fill={isVisibleProp ? "#fbf0b7" : "#d4ccce"}
        fillOpacity={1}
        onClick={handleMarkerClick}
      />
    </Popover>
  );
};

export default MapMarker;
