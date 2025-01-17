import { useContext } from "react";
import NoteContext from "../../Notes/note-context";
import Lists from "./Lists";


const NoteLists = (props) => {
    const ctx = useContext(NoteContext);

    const editHandler = (id) => {
        ctx.editNote(id);
        props.onEdit();
    }

    const removeHandler = (id) => {
        ctx.removeNote(id);
    }

    const displayNotes = ctx.filteredNotes.length > 0 ? ctx.filteredNotes : ctx.notes;
    return (
        <div>
            <ul>
                {displayNotes.map((note) => {
                    return (
                        <Lists 
                        id={note.id}
                        key={note.id}
                        title={note.title}
                        description={note.description}
                        onEdit={editHandler.bind(null, note.id)}
                        onRemove={removeHandler.bind(null, note.id)}
                        />
                    );
                })}
            </ul>
        </div>
        
    );
}

export default NoteLists;