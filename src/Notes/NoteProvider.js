import NoteContext from "./note-context";


const NoteProvider = (props) => {

    const noteContext = {
        title: "",
        description: "",
        totalNotes: 0,
        showing: 0
    }

    return (
        <NoteContext.Provider value={noteContext}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteProvider;