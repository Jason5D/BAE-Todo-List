import React, { useState } from "react";
import Credits from "./Credits.js";
import Input from "./Input.js";
import List from "./List.js";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleChange() {
    setList([...list, text]);
    setText("");
  }

  function handleDeleteAll() {
    setList([]);
  }

  function handleDeleteItem(newList) {
    setList(newList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <main>
        <Input
          text={text}
          onTextChange={handleTextChange}
          onAdd={handleChange}
          handleDeleteAll={handleDeleteAll}
        />
        <List list={list} onDelete={handleDeleteItem}/>
      </main>
      <footer>
        <Credits />
      </footer>
    </div>
  );
}

export default App;
