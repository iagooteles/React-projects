import React, { useState } from "react";

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function AddNote(props) {
    const [isExpanded, setIsExpanded] = useState(false);


    const [note, setNote] = useState({
        title: "",
        content: ""
    });


    function expand() {
        return setIsExpanded(true);
    }


    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    };

    function submitNote(event) {
        event.preventDefault();
        props.onAddNote(note)

        setNote({
            title: "",
            content: ""
        });
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input
                        onChange={handleChange}
                        name="title"
                        placeholder="Title"
                        value={note.title}
                        autoComplete="off"
                        required
                    />
                )}

                <textarea
                    onChange={handleChange}
                    onClick={expand}
                    name="content"
                    placeholder="Take a note..."
                    rows= {isExpanded ? "3" : "1"}
                    value={note.content}
                    autoComplete="off"
                    required
                />

                <Zoom in={isExpanded}>

                    <Fab onClick={submitNote} className="Fab">
                        <AddIcon />
                    </Fab>
                </Zoom>


            </form>
        </div>
    );
};


export default AddNote;