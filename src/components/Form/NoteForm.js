import React, { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./NoteForm.module.css";
import NoteContext from "../../Notes/note-context";

const NoteForm = (props) => {
    const ctx = useContext(NoteContext);
    const [input, setInput] = useState({
        enteredTitle: "",
        enteredDesc: ""
    });

    const [editMode, setEditMode] = useState(false);

    const titleHandler = (event) => {
        event.preventDefault();
        setInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        });
    }

    const descriptionHandler = (event) => {
        event.preventDefault();
        setInput((prevState) => {
            return {
                ...prevState,
                enteredDesc: event.target.value
            };
        });
    }

    const addHandler = (event) => {
        event.preventDefault();
        const noteDetails = {
            title: input.enteredTitle,
            description: input.enteredDesc,
            id: ctx.noteToEdit ? ctx.noteToEdit.id : Math.random().toString()
        };
        ctx.addNote(noteDetails);
        setInput({
            enteredTitle: "",
            enteredDesc: ""
        });
        setEditMode(false);
        props.onClose();
    }
    

    useEffect(() => {
        if(ctx.noteToEdit) {
            setInput({
                enteredTitle: ctx.noteToEdit.title,
                enteredDesc: ctx.noteToEdit.description
            })
            setEditMode(true);
        }
    }, [ctx.noteToEdit])

    return (
        <Modal onClose={props.onClose}>
            <form className={classes.form}>
                <div className={classes.header}>
                    <h2>Add New Note</h2>
                </div>
                <div className={classes.input}>
                    <div className={classes.title}>
                        <label htmlFor="title">Note Title: </label>
                        <input id="title" type="text" onChange={titleHandler} value={input.enteredTitle}/>
                    </div>
                    <div className={classes.description}>
                        <label htmlFor="description">Note Desc: </label>
                        <textarea id="description" type="text" onChange={descriptionHandler} value={input.enteredDesc}/>
                    </div>
                </div>
                <div className={classes.button}>
                    <Button type="submit" onClick={addHandler} text={editMode ? "Update" : "Add To Book"} className={classes.add} />
                    <Button type="submit" onClick={props.onClose} text="Close" className={classes.close} />
                </div>
            </form>
        </Modal>
    );
}

export default NoteForm;