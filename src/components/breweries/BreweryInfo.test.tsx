import { render, screen, fireEvent } from "@testing-library/react";

import BreweryInfo from "./BreweryInfo";

const mockBrewery = {
  id: "madtree-brewing-cincinnati",
  name: "MadTree Brewing",
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
};

describe("Information Display when present", () => {
  beforeEach(() => {
    render(<BreweryInfo isSelected={false} brewery={mockBrewery} />);
  });

  it("should display the Address information from the Brewery", () => {
    screen.getByText(/MadTree Brewing/i);
    screen.getByText(/Cincinnati/i);
    screen.getByText(/Ohio/i);
    screen.getByText(/45209/i);
  });

  it("should display the Breweries' website", () => {
    screen.getByText("http://www.madtreebrewing.com");
  });

  it("should display the type of brewery", () => {
    screen.getByText(/regional/i);
  });
});

const mockBreweryMissingDetails = {
  id: "madtree-brewing-cincinnati",
  name: "MadTree Brewing",
  brewery_type: null,
  street: "3301 Madison Rd",
  address_2: null,
  address_3: null,
  city: "Cincinnati",
  state: "Ohio",
  county_province: null,
  postal_code: "45209-1132",
  country: "United States",
  longitude: null,
  latitude: null,
  phone: "5138368733",
  website_url: null,
  updated_at: "2021-10-23T02:24:55.243Z",
  created_at: "2021-10-23T02:24:55.243Z",
};

describe("Information Display when missing", () => {
  beforeEach(() => {
    render(
      <BreweryInfo isSelected={false} brewery={mockBreweryMissingDetails} />
    );
  });

  it("should display the Address information from the Brewery", () => {
    screen.getByText(/MadTree Brewing/i);
    screen.getByText(/Cincinnati/i);
    screen.getByText(/Ohio/i);
    screen.getByText(/45209/i);
  });

  it("should display the Breweries' website", () => {
    screen.getByText(/Website Unavailable/i);
  });

  it("should display the type as Not Available", () => {
    screen.getByText(/Not Available/i);
  });

  it("should display that it is not displayed in the map", () => {
    screen.getByText(/Not Displayed in Map/i);
  });
});

describe("Functionality", () => {
  beforeEach(() => {});

  it("should display the Address information from the Brewery", () => {
    const handleSelect = jest.fn();

    render(
      <BreweryInfo
        isSelected={false}
        brewery={mockBreweryMissingDetails}
        onSelect={handleSelect}
      />
    );

    fireEvent.click(screen.getByText(/MadTree Brewing/i));

    expect(handleSelect).toHaveBeenCalledTimes(1);
  });
});
