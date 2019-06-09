import React, { useState } from "react";
import eventBox from "../utils/event-box";

const btnStyle = {
  height: "1.5rem",
  width: "5rem"
};

export default props => {
  const box = eventBox.getBox("HelloBox");
  const count = box.getValue("count");
  return (
    <button
      style={btnStyle}
      className="btn btn-primary"
      onClick={e => {
        box.setValue("count", count + 1);
      }}
    >
      Add {count}
    </button>
  );
};
