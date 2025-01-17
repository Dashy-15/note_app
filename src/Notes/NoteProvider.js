import React, { useReducer } from "react";
import NoteContext from "./note-context";

const defaultNote = {
    notes: [],
    noteToEdit: null,
    filteredNotes: []
};

const noteReducerFun = (state, action) => {
    if(action.type === "ADD") {
        const existingNoteIndex = state.notes.findIndex((note) => note.id === action.note.id);
        let updatedNotes;
        if(existingNoteIndex >= 0) {
            updatedNotes = [...state.notes];
            updatedNotes[existingNoteIndex] = action.note;
        }
        else {
            updatedNotes = state.notes.concat(action.note);
        }
        return {
            ...state,
            notes: updatedNotes,
            filteredNotes: [],
            noteToEdit: null
        }
    }
    if(action.type === "REMOVE") {
        const updatedNotes = state.notes.filter((note) => note.id !== action.id);
        const updatedFilteredNotes = state.filteredNotes.filter((note) => note.id !== action.id);
        return {
            ...state,
            notes: updatedNotes,
            filteredNotes: updatedFilteredNotes
        }
    }
    if(action.type === "EDIT") {
        const editNote = state.notes.find((note) => note.id === action.id); 
        return {
            ...state,
            noteToEdit: editNote
        }
    }
    if(action.type === "SEARCH") {
        const updatedFilteredNotes = state.notes.filter((note) => 
        note.title.toLowerCase().includes(action.query.toLowerCase()))
        return {
            ...state,
            filteredNotes: updatedFilteredNotes
        }
    }
    return state;
}

const NoteProvider = (props) => {
    const [noteState, noteDispatch] = useReducer(noteReducerFun, defaultNote);

    const addNoteHandler = (note) => {
        noteDispatch({type: "ADD", note: note});
    }

    const removeNoteHandler = (id) => {
        noteDispatch({type: "REMOVE", id: id});
    }

    const editNoteHandler = (id) => {
        noteDispatch({type: "EDIT", id: id});
    }

    const searchNotesHandler = (query) => {
        noteDispatch({type: "SEARCH", query: query})
    }

    const noteContext = {
        notes: noteState.notes,
        noteToEdit: noteState.noteToEdit,
        filteredNotes: noteState.filteredNotes,
        addNote: addNoteHandler,
        removeNote: removeNoteHandler,
        editNote: editNoteHandler,
        searchNotes: searchNotesHandler
    }

    return (
        <NoteContext.Provider value={noteContext}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteProvider;