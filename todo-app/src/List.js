import React from "react";

export default function List(props) {
  return (
    <ul style={{ listStyle: "none" }}>
      {props.list.map((item, index) => (
        <li key={index}>
          <input type="checkbox" />
          {item}
        </li>
      ))}
    </ul>
  );
}
