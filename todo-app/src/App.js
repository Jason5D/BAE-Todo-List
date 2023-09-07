import React, { useState } from "react";
import "./App.css";
import Credits from "./Credits.js";
import Input from "./Input.js";
import List from "./List.js";


function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

// this reads the text put in the text box so that it can be added into the list
  function handleTextChange(event) {
    setText(event.target.value);
  }

  // adds what is in the text box to the list array
  function handleChange() {
    setList([...list, text]);
    setText("");
  }

  // deletes all the items in the list
  function handleDeleteAll() {
    setList([]);
  }

  // deletes a single item in the list
  function handleDeleteItem(newList) {
    setList(newList);
  }


  return (
    <div className="App">
        <h1 className="Header">Todo App</h1>
        <Input
          text={text}
          onTextChange={handleTextChange}
          onAdd={handleChange}
          handleDeleteAll={handleDeleteAll}
        />
        <List list={list} onDelete={handleDeleteItem}/>
        <Credits />
    </div>
  );
}

export default App;
