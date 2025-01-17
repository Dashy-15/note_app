import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import classes from "./HomePage.module.css";
import NoteContext from "../../Notes/note-context";

const HomePage = (props) => {
    const ctx = useContext(NoteContext);
    const [searchQuery, setSearchQuery] = useState("");

    const searchHandler = (event) => {
        setSearchQuery(event.target.value);
        ctx.searchNotes(event.target.value);
    }

    const showingNotes = ctx.filteredNotes.length > 0 ? ctx.filteredNotes.length : ctx.notes.length;

    return (
        <div className={classes.home}>
            <h1>Note Book</h1>
            <div className={classes.search}>
                <label htmlFor="search">Search Notes: </label>
                <input id="search" type="text" value={searchQuery} onChange={searchHandler}/>
            </div>
            <div className={classes.count}>
                <div>Total Notes: {ctx.notes.length}</div>
                <div>Showing: {showingNotes}</div>
            </div>
            <div className={classes.button}>
                <Button 
                type="submit" 
                text="Add To Book"
                onClick={props.onAdd}
                />
            </div>
        </div>
    );
}

export default HomePage;