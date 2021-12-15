import React, { useState } from "react";
import Heading from "./Heading";
import ListItem from "./listItem";
function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  function handleInput(event) {
    let value = event.target.value;
    setItem(value);
  }
  function addItem() {
    console.log(item);
    setItems((prevValue) => [...prevValue, item]); //update items array with spread operator and append new List Item with name equal to the item.
    setItem(""); //Erase the item once it's been added. This will blank out the input once adding.
  }
  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input onChange={handleInput} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <ListItem name="Default Item" />
          {items.map((item, index) => (
            <ListItem key={index} name={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
