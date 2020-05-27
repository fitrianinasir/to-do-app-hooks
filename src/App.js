import React, { useState } from "react";
import List from "./List";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    text: "",
    key: "",
  });

  const inputHandler = (e) => {
    setCurrentItem({
      text: e.target.value,
      key: Date.now(),
    });
  };
 
  const addItem = (e) => {
    e.preventDefault();
    if (currentItem.text.length > 0) {
      setCurrentItem({ text: "", key: "" });
      setItems([...items, currentItem]);
    } else {
      return;
    }
  };

  function changeItem(text, key) {
    const allItem = [...items];
    allItem.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
      return null;
    });
    setItems(allItem);
  }

  const deleteItem = (key) => {
    let filterItem = items.filter((item) => item.key !== key);
    setItems(filterItem);
  };

  return (
    <div className="form-bg">
      <div className="form-body">
        <form action="" onSubmit={addItem}>
          <input
            type="text"
            placeholder="Enter task"
            value={currentItem.text}
            onChange={inputHandler}
          />
          <button className="btn-form">Add</button>
        </form>
        {items.length > 0 ? (
          <div className="task-body">
            <List
              items={items}
              changeItem={changeItem}
              deleteItem={deleteItem}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
