import { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

import { MapMarkerType, SelectedCoordType } from "../../../types";
import { isValidLocation } from "../../utils";

import styles from "./GoogleMapList.module.css";

interface Props {
  markers: MapMarkerType[];
  onClick: (id: string) => void;
  defaultZoom?: number;
  selectedItem?: string;
  onClose: (id: string) => void;
}

const GoogleMapList = ({
  onClick,
  markers,
  defaultZoom = 15,
  selectedItem,
  onClose,
}: Props) => {
  const [center, setCenter] = useState<SelectedCoordType>();

  const viableCoords = markers.find((marker) => isValidLocation(marker));

  const handleMarkerClick = (id: string) => {
    onClick(id);
  };

  const handlePopoverClose = (id: string) => {
    onClose(id);
  };

  useEffect(() => {
    const selectedMarker = markers.find((marker) => marker.id === selectedItem);

    if (selectedMarker)
      setCenter({ lat: selectedMarker.lat, lng: selectedMarker.lng });
  }, [markers, selectedItem]);

  return (
    <>
      <div className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
          }}
          // have to represent the home town =D
          defaultCenter={{ lat: 39.75507746576773, lng: -104.98908400876986 }}
          defaultZoom={defaultZoom}
          center={center ?? viableCoords}
        >
          {markers.map((marker) =>
            isValidLocation(marker) ? (
              <MapMarker
                key={marker.id}
                id={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                text={marker.text}
                isVisible={selectedItem === marker.id}
                onClick={handleMarkerClick}
                onPopoverClose={handlePopoverClose}
              />
            ) : null
          )}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default GoogleMapList;
