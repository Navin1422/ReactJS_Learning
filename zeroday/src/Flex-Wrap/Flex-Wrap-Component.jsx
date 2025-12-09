import React from "react";
import FlexWrapStyled from "./Flex-Wrap-Style";

const FlexWrapComponent = () => {
  return (
    <FlexWrapStyled>
      <div className="Main">
        <div className="Box">One</div>
        <div className="Box">Two</div>
        <div className="Box">Three</div>
        <div className="Box">Four</div>
        <div className="Box">Five</div>
        <div className="Box">Six</div>
      </div>
    </FlexWrapStyled>
  );
};

export default FlexWrapComponent;
