import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

import styles from "./GoogleMap.module.css";

interface Props {
  name: string;
  lat: number;
  lng: number;
}

const GoogleMap = ({ lat, lng, name }: Props) => {
  const isValidLocation = !isNaN(lat) && !isNaN(lng);

  return isValidLocation ? (
    <div style={{ height: "300px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}` }}
        defaultCenter={{ lat, lng }}
        defaultZoom={16}
      >
        <MapMarker lat={lat} lng={lng} text={name} />
      </GoogleMapReact>
    </div>
  ) : (
    <div className={styles.missingCoordText}>
      <span>No Coordinate Information Available</span>
    </div>
  );
};

export default GoogleMap;
