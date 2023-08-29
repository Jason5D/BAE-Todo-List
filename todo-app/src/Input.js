import React from "react";
import Delete from "./Delete.js";

export default function Input({ text, onTextChange, onAdd, handleDeleteAll }) {
  return (
    <div>
      <label for="newtask">New task: </label>
      <input
        type="text"
        id="newtask"
        name="newtask"
        value={text}
        onChange={onTextChange}
      />
      <button type="button" onClick={onAdd}>
        Add task
      </button>
      <Delete handleDeleteAll={handleDeleteAll}/>
    </div>
  );
}
