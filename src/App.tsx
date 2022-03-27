import React, { useState } from "react";
import styles from "./App.module.css";
import Search from "./components/common/Search";
import Breweries from "./components/breweries/Breweries";

import { breweryDb } from "./api/breweryDb";

import { BreweryType } from "./types/brewery";

const App = () => {
  const [breweries, setBreweries] = useState<BreweryType[]>([]);
  const [haveSearched, setHaveSearched] = useState(false);

  const handleSearch = async (val: string) => {
    setHaveSearched(false);
    const breweries = await breweryDb.getByZipCode(val);
    setBreweries(breweries);
    setHaveSearched(true);
  };

  const handleSearchOpen = () => {
    setHaveSearched(false);
  };

  return (
    <div className="App">
      <div className={styles.container}>
        <Search handleSearch={handleSearch} handleOpen={handleSearchOpen} />
        <Breweries breweries={breweries} haveSearched={haveSearched} />
      </div>
    </div>
  );
};

export default App;
