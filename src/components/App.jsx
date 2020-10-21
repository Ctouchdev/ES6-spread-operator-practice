import React, { useState } from "react";

function App() {
  const [listItem, setListItem] = useState("");
  const [items, setItems] = useState([]);

  function handleInput(e) {
    const itemValue = e.target.value;

    setListItem(itemValue);
  }

  function addItem() {
    setListItem("");
    setItems((prevItems) => {
      return [...prevItems, listItem];
    });
  }

  console.log(listItem);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleInput}
          type="text"
          name="listItems"
          value={listItem}
          placeholder="Enter Item"
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
