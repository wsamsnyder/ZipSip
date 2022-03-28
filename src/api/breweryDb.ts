export const breweryDb = {
  getByZipCode: (zipCode: string, page: number) =>
    fetch(
      `https://api.openbrewerydb.org/breweries?by_postal=${zipCode}&page=${page}&per_page=10`
    ).then((res) => res.json()),
};
