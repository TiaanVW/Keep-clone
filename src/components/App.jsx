import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import NewNote from "./NewNote"

function App() {
    const [allNotes, setAllNotes] = React.useState([]);

    function addNote(newNote) {
        setAllNotes(prevItem => {
            return [...prevItem, newNote]
        })
    }

    function deleteNote (id) {
        setAllNotes( prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id
            })
        })
    }

    return (
        <div>
            <Header />
            <NewNote 
                newNote={addNote}
            />

            {allNotes.map((noteItem, index) => (
                <Note 
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    delete={deleteNote}
                />
            )) }

            <Footer />
        </div>
    )
}

export default App;