import React from "react";
import Box from "./Box";

function Offer() {
  const offers = [
    "Usługa 1",
    "Usługa 2",
    "Usługa 3",
    "Usługa 4",
    "Usługa 5",
    "Usługa 6",
  ];
  const listItems = offers.map((offers) => <>{offers}</>);
  return (
    <div className="offer mainpadding">
      <div className="main">
        <div>
          <h3>Czym zajmuje się nasza firma?</h3>
        </div>
        <div className="container boxpadding center">
          <Box value={listItems[0]} />
          <Box value={listItems[1]} />
          <Box value={listItems[2]} />
        </div>
        <div className="container boxpadding center">
          <Box value={listItems[3]} />
          <Box value={listItems[4]} />
          <Box value={listItems[5]} />
        </div>
      </div>
    </div>
  );
}

export default Offer;
