import React from "react";

export default function Input({ text, onTextChange, onAdd }) {
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
    </div>
  );
}
