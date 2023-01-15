import React from "react";

function MenuContainer(props) {
  return (
    <div className="menu_container">
      <ul>
        <li>
          <a>{props.content}</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuContainer;
