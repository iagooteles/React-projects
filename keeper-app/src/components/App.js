
import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

import AddNote from './Addnote';

function App() {

    const [notes, setNotes] = useState([]);

    function submitNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note]
        });
    };

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header />
            <AddNote onAddNote={submitNote} />

            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />)
            }
            )}

            <Footer />
        </div>
    );
}

export default App;
