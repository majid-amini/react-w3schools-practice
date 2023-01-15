import React from "react";
import "./Header.css";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
function Header() {
  return (
    <header>
      <nav className="nav-header">
        <LeftContainer />

        <RightContainer />
      </nav>
    </header>
  );
}

export default Header;
