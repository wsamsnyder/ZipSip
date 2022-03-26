interface Params {
  street?: string | null;
  add1?: string | null;
  add2?: string | null;
  city: string;
  state: string;
  zip: string;
}

const Address = ({ street, add1, add2, city, state, zip }: Params) => {
  return (
    <div>
      {street && (
        <>
          <span>{street}</span>
          <br />
        </>
      )}
      {add1 && (
        <>
          <span>{add1}</span>
          <br />
        </>
      )}
      {add2 && (
        <>
          <span>{add2}</span>
          <br />
        </>
      )}
      {<span>{`${city}, ${state} ${zip}`}</span>}
    </div>
  );
};

export default Address;
