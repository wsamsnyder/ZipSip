export const breweryDb = {
  getByZipCode: (zipCode: string) =>
    fetch(`https://api.openbrewerydb.org/breweries?by_postal=${zipCode}`).then(
      (res) => res.json()
    ),
};
