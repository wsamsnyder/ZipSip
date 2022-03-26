import React, { useState } from "react";
import styles from "./App.module.css";
import Search from "./components/common/Search";
import Breweries from "./components/breweries/Breweries";

import { breweryDb } from "./api/breweryDb";

import { BreweryType } from "./types/brewery";

const App = () => {
  const [breweries, setBreweries] = useState<BreweryType[]>([]);

  const handleSearch = async (val: string) => {
    const breweries = await breweryDb.getByZipCode(val);

    setBreweries(breweries);
  };

  return (
    <div className="App">
      <div className={styles.container}>
        <Search handleSearch={handleSearch} />
        <Breweries breweries={breweries} />
      </div>
    </div>
  );
};

export default App;
