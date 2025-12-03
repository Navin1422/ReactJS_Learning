import React from "react";
import { HelloWorldStyle } from "./Hello-World_Style";
const HelloWorldComponent = () => {
  return (
    <HelloWorldStyle>
      {/* <h1 className="element">Sri eshwar</h1> */}
      <div className="parent">
        <div className="square__rectangle"></div>
      </div>
    </HelloWorldStyle>
  );
};
export default HelloWorldComponent;