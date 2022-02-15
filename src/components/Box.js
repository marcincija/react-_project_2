import React from "react";
function Box(props) {
  return (
    <div className="box">
      <p>{props.value}</p>
    </div>
  );
}

export default Box;
