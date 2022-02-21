import React from "react";
import Box from "./Box";

function Offer() {
  const offers = [
    {
      id: "a",
      offer: "Usługa 1",
      isNew: true,
    },
    {
      id: "b",
      offer: "Usługa 2",
      isNew: false,
    },
    {
      id: "c",
      offer: "Usługa 3",
      isNew: false,
    },
    {
      id: "d",
      offer: "Usługa 4",
      isNew: false,
    },
    {
      id: "e",
      offer: "Usługa 5",
      isNew: false,
    },
    {
      id: "f",
      offer: "Usługa 6",
      isNew: false,
    },
  ];
  const listItems = offers.map((offers) => (
    <>
      <Box key={offers.id} value={offers.offer} isNew={offers.isNew} />
    </>
  ));
  return (
    <div className="offer mainpadding" id="offer">
      <div className="main">
        <div>
          <h3>Czym zajmuje się nasza firma?</h3>
        </div>
        <div className="container boxpadding center">{listItems}</div>
      </div>
    </div>
  );
}

export default Offer;
