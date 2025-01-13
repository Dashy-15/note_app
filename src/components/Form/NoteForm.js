import React from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./NoteForm.module.css";

const NoteForm = (props) => {
    return (
        <Modal>
            <form className={classes.form}>
                <div className={classes.header}>
                    <h2>Add New Note</h2>
                </div>
                <div className={classes.input}>
                    <div className={classes.title}>
                        <label htmlFor="title">Note Title: </label>
                        <input id="title" type="text" />
                    </div>
                    <div className={classes.description}>
                        <label htmlFor="description">Note Desc: </label>
                        <textarea id="description" type="text" />
                    </div>
                </div>
                <div className={classes.button}>
                    <Button type="submit" onClick={props.onAdd} text="Add To Book" className={classes.add} />
                    <Button type="submit" onClick={props.onClose} text="Close" className={classes.close} />
                </div>
            </form>
        </Modal>
    );
}

export default NoteForm;