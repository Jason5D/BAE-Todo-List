import React from "react";

export default function List(props) {
  function handleDelete(index) {
    const newList = [...props.list];
    newList.splice(index, 1);
    props.onDelete(newList);
  }

  return (
    <ul style={{ listStyle: "none" }}>
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
