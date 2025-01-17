import React from "react";

const NoteContext = React.createContext({
    notes: [],
    noteToEdit: null,
    filteredNotes: [],
    addNote: (note) => {},
    removeNote: (id) => {},
    editNote: (id) => {},
    searchNotes: (query) => {}
});

export default NoteContext;