import { useState } from "react";

import { Popover } from "@patternfly/react-core";
import { MapPin } from "react-feather";

interface Props {
  text: string;
  lat: number;
  lng: number;
}

const MapMarker = ({ text, lng, lat }: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Popover
      isVisible={isVisible}
      bodyContent={text}
      hasAutoWidth
      shouldClose={() => setIsVisible(false)}
    >
      <MapPin
        fill="red"
        fillOpacity={0.75}
        onClick={() => setIsVisible(true)}
      />
    </Popover>
  );
};

export default MapMarker;
