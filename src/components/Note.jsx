import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/Delete';

function Note (props) {
    return (
        <div class="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => {
                props.delete(props.id)
            }}>
                <DeleteOutlineIcon />
            </button>
        </div>
    )
}

export default Note