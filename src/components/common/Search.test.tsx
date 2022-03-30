import { render, screen, fireEvent } from "@testing-library/react";

import Search from "./Search";

describe("Functionality", () => {
  it("should allow the Search box to be closed and opened if canCollapse is true", () => {
    render(
      <Search
        zipCode={""}
        setZipCode={() => {}}
        handleSearch={() => {}}
        canCollapse={true}
      />
    );

    fireEvent.click(screen.getByText(/Cancel/i));
    fireEvent.click(screen.getByText(/Search Again/i));
  });

  it("should call handleSearch when Seach is clicked", async () => {
    const handleSearch = jest.fn();

    render(
      <Search
        zipCode={""}
        setZipCode={() => {}}
        handleSearch={handleSearch}
        canCollapse={true}
      />
    );

    fireEvent.click(screen.getByText(/Search/i));

    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
