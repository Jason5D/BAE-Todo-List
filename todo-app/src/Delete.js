import React from "react";

// the button that deletes everything in the list by resetting the useState to an empty array
export default function Delete({handleDeleteAll}) {
    return (
        <div>
            <button onClick={handleDeleteAll}>
                Delete All
            </button>
        </div>
    )
}