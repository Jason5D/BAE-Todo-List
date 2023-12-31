import React from "react";

export default function List(props) {
  // deletes an element from the list by creating a new array, removes the element at the specified index, and then calls the onDelete function with the updated list.
  function handleDelete(index) {
    const newList = [...props.list];
    newList.splice(index, 1);
    props.onDelete(newList);
  }

  return (
    <ul className="List" style={{ listStyle: "none" }}>
      {props.list.map((item, index) => (
        <li key={index}>
          <input type="checkbox" />
          {item}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
