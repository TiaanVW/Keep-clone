import React from "react"


function NewNote(props) {
    const [addNote, setAddNote] = React.useState({
        title: "",
        content: ""
    })

    function handleChange(event){
        const { value, name } = event.target

        setAddNote( (prevValue => {
            if (name === "title") {
                return {
                title: value,
                content: prevValue.content
                }
            } else if (name === "content") {
                return {
                title: prevValue.title,
                content: value
                }
            }
        }))
    }


    return(
      <div>
        <div class="form">
          <input onChange={handleChange} name="title" placeholder="Title" value={addNote.title} />
          <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={addNote.content} />
          <button onClick={() => 
            {props.newNote(addNote);
            setAddNote({title: "",
            content: ""});
            }}>Add</button>
        </div>
      </div>
    )
}

export default NewNote