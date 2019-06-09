import React, { useState, useEffect } from "react";
import eventBox from "../utils/event-box";
import AddButton from "./add-button";

const box = eventBox.getBox("HelloBox");
box.setValue("count", 0);

export default props => {
  const [state, setState] = useState(0);
  let flag = false;
  //let count = box.getValue("count");
  useEffect(() => {
    //box.on("count", newValue => setState(newValue));
    console.log("in useEffect");

    box.on("count", () => {
      flag = !flag;
      setState(flag);
    });
  }, []);
  let count = box.getValue("count");
  console.log("count:", count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <AddButton />
    </div>
  );
};
