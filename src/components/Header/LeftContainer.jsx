import React from "react";
import MenuContainer from "./MenuContainer";
import Menulist from "./Menulist";
import "./LeftContainer.css";
function LeftContainer() {
  return (
    <div className="left_container">
      <div className="logo">w3schools</div>
      <div className="menu_container">
        <ul>
          <Menulist content={"tutorials"} />
          <Menulist content={"Refrences"} />
          <Menulist content={"Exercises"} />
          <Menulist content={"Videos"} />
        </ul>
      </div>
    </div>
  );
}

export default LeftContainer;
