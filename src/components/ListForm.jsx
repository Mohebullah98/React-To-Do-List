import React, { useState } from "react";
function ListForm(props) {
  const [item, setItem] = useState("");
  function handleInput(event) {
    let value = event.target.value;
    setItem(value);
  }
  return (
    <div className="form">
      <input onChange={handleInput} type="text" value={item} />
      <button
        onClick={() => {
          props.addItem(item);
          setItem(""); //Erase the item once it's been added. This will blank out the input once adding.
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
export default ListForm;
