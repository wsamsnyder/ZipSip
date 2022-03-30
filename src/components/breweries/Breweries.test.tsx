import { render, screen, fireEvent } from "@testing-library/react";

import Breweries from "./Breweries";

const mockBreweries = [
  {
    id: "brewery_1",
    name: "Brewery One",
    brewery_type: "regional",
    street: "3301 Madison Rd",
    address_2: null,
    address_3: null,
    city: "Cincinnati",
    state: "Ohio",
    county_province: null,
    postal_code: "45209-1132",
    country: "United States",
    longitude: "-84.4239715",
    latitude: "39.1563725",
    phone: "5138368733",
    website_url: "http://www.madtreebrewing.com",
    updated_at: "2021-10-23T02:24:55.243Z",
    created_at: "2021-10-23T02:24:55.243Z",
  },
  {
    id: "brewery_2",
    name: "Brewery Two",
    brewery_type: "regional",
    street: "3301 Madison Rd",
    address_2: null,
    address_3: null,
    city: "Cincinnati",
    state: "Ohio",
    county_province: null,
    postal_code: "45209-1132",
    country: "United States",
    longitude: "-84.4239715",
    latitude: "39.1563725",
    phone: "5138368733",
    website_url: "http://www.madtreebrewing.com",
    updated_at: "2021-10-23T02:24:55.243Z",
    created_at: "2021-10-23T02:24:55.243Z",
  },
];

describe("Load More Logic", () => {
  it("should display Load More when there are more breweries to load", () => {
    render(
      <Breweries
        breweries={mockBreweries}
        selectedItem={""}
        haveSearched={true}
        onSelect={() => {}}
        loadMore={() => {}}
        loadedAllBreweries={false}
      />
    );

    screen.getByText(/Load More/i);
  });

  it("should display No Breweries in the Search Area when there not any breweries in the area", () => {
    render(
      <Breweries
        breweries={[]}
        selectedItem={""}
        haveSearched={true}
        onSelect={() => {}}
        loadMore={() => {}}
        loadedAllBreweries={false}
      />
    );

    screen.getByText(/No Breweries in the Search Area/i);
  });

  it("should display All Breweries Loaded when all of the breweries have been loaded", () => {
    render(
      <Breweries
        breweries={mockBreweries}
        selectedItem={""}
        haveSearched={true}
        onSelect={() => {}}
        loadMore={() => {}}
        loadedAllBreweries={true}
      />
    );

    screen.getByText(/All Breweries Loaded/i);
  });
});
