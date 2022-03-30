export const breweryDb = {
  getByZipCode: (zipCode: string, page: number) => {
    const perPage = process.env.REACT_APP_PER_PAGE ?? 10;
    return fetch(
      `https://api.openbrewerydb.org/breweries?by_postal=${zipCode}&page=${page}&per_page=${perPage}`
    ).then((res) => res.json());
  },
};
