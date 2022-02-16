import React from "react";
import Orangeball from "./Orangeball";

function Box(props) {
  return (
    <>
      <div className="box">
        {props.isNew ? <Orangeball /> : <></>}
        <p>{props.value}</p>
      </div>
    </>
  );
}

export default Box;
