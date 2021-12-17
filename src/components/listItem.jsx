import React, { useState } from "react";
function ListItem(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.name}
    </li>
  );
}
export default ListItem;
