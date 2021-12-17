import React, { useState } from "react";
import Heading from "./Heading";
import ListItem from "./listItem";
import ListForm from "./ListForm";
function App() {
  const [items, setItems] = useState([]);
  function addItem(item) {
    console.log(item);
    setItems((prevValue) => [...prevValue, item]); //update items array with spread operator and append new List Item with name equal to the item.
  }
  //delete specific element from array after clicking on it. Pass the index as parameter
  function deleteItem(index) {
    setItems((prevValue) => prevValue.filter((num, i) => i !== index));
  }
  return (
    <div className="container">
      <Heading />
      <ListForm array={items} addItem={addItem} />
      <ul>
        <ListItem name="Default Item" />
        {items.map((item, index) => (
          <ListItem key={index} id={index} name={item} onChecked={deleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default App;
