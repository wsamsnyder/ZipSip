import { useEffect, useState } from "react";

import Search from "./components/common/Search";
import Breweries from "./components/breweries/Breweries";
import GoogleMapList from "./components/common/map/GoogleMapList";

import { breweryDb } from "./api/breweryDb";
import { BreweryType, MapMarkerType } from "./types";

import styles from "./App.module.css";

const App = () => {
  const [breweries, setBreweries] = useState<BreweryType[]>([]);
  const [markers, setMarkers] = useState<MapMarkerType[]>([]);
  const [haveSearched, setHaveSearched] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [page, setPage] = useState(1);
  const [loadedAllBreweries, setLoadedAllBreweries] = useState(false);

  const setMarkersForBreweries = (breweries: BreweryType[]) => {
    setMarkers(
      breweries.map((brewery) => ({
        id: brewery.id,
        lat: parseFloat(brewery.latitude),
        lng: parseFloat(brewery.longitude),
        text: brewery.name,
      }))
    );
  };

  useEffect(() => {
    setMarkersForBreweries(breweries);
  }, [breweries]);

  const handleSearch = async () => {
    setHaveSearched(false);
    setPage(1);

    const resp = (await breweryDb.getByZipCode(zipCode, page)) as BreweryType[];

    if (resp.length < 10) {
      setLoadedAllBreweries(true);
    } else {
      setLoadedAllBreweries(false);
    }

    setBreweries(resp);
    setHaveSearched(true);
  };

  const handleSearchOpen = () => {
    setHaveSearched(false);
  };

  const onClose = (id: string) => {
    if (id === selectedItem) setSelectedItem("");
  };

  const onSelect = (id: string) => {
    setSelectedItem(id);
  };

  const addMoreBreweries = async (page: number) => {
    const resp = (await breweryDb.getByZipCode(zipCode, page)) as BreweryType[];
    if (resp.length) {
      setBreweries((prev) => [...prev, ...resp]);

      if (resp.length < 10) setLoadedAllBreweries(true);
    }
  };

  const loadMore = () => {
    setPage((prev) => {
      const newPage = prev + 1;
      addMoreBreweries(newPage);
      return newPage;
    });
  };

  return (
    <div className="App">
      <div className={styles.hasResults}>
        <div className={styles.searchAndResults}>
          Enter a zip code to find Breweries nearby!
          <Search
            zipCode={zipCode}
            setZipCode={(val: string) => setZipCode(val)}
            handleSearch={handleSearch}
            handleOpen={handleSearchOpen}
          />
          <Breweries
            breweries={breweries}
            haveSearched={haveSearched}
            onSelect={onSelect}
            selectedItem={selectedItem}
            loadedAllBreweries={loadedAllBreweries}
            loadMore={loadMore}
          />
        </div>
        <GoogleMapList
          onClick={onSelect}
          onClose={onClose}
          defaultZoom={14}
          markers={markers}
          selectedItem={selectedItem}
        />
      </div>
    </div>
  );
};

export default App;
