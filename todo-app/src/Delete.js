import React from "react";

export default function Delete({handleDeleteAll}) {
    return (
        <div>
            <button onClick={handleDeleteAll}>
                Delete All
            </button>
        </div>
    )
}