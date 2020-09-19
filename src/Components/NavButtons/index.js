import React from "react";

import "./style.css"

const NavButtons = (props) => {
  return (
    <div className="nav-buttons">
      <button onClick={props.prevFn}><h3>{'< Prev'}</h3></button>
      <button onClick={props.nextFn}><h3>{'Next >'}</h3></button>
    </div>
  );
};

export default NavButtons;
