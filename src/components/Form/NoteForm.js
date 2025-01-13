import React from "react";
import Modal from "../UI/Modal";

const NoteForm = () => {
    return (
        <Modal>
            <form>
                <div>
                    <h2>Add New Note</h2>
                </div>
                <div>
                    <label htmlFor="title">Note Title: </label>
                    <input id="title" type="text" />
                </div>
                <div>
                    <label htmlFor="description">Note Desc: </label>
                    <textarea id="description" type="text" />
                </div>
                <div>
                    <Button type="submit" onClick={} text="Add To Book"/>
                    <Button type="submit" onClick={} text="Close" />
                </div>
            </form>
        </Modal>
    );
}

export default NoteForm;