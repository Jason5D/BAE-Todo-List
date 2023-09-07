import React from "react";

export default function AddTask({onAdd}) {
    return (
        <button type="button" onClick={onAdd}>
        Add task
      </button>
    )
}
