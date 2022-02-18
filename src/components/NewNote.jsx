import React from "react"
import AddButton from "@material-ui/icons/Add"
import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom"
import Collapse from '@material-ui/core/Collapse';

function NewNote(props) {
    const [isExpanded, setExpanded] = React.useState(false)
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

    function expand () {
        setExpanded(true)
    }


    return(
      <div>
        <div class="form">
        <Collapse in={true}>
        {isExpanded ? <input onChange={handleChange} name="title" placeholder="Title" value={addNote.title} /> : null}

          <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? "3" : "1"} value={addNote.content} />
          <Zoom in={isExpanded ? true : null}>          
            <Fab onClick={() => 
                {props.newNote(addNote);
                setAddNote({title: "",
                content: ""});
                }}><AddButton />
            </Fab>
          </Zoom>
          </Collapse>
        </div>
      </div>
    )
}

export default NewNote