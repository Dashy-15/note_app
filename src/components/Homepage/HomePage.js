import React from "react";
import Button from "../UI/Button";

const HomePage = (props) => {

    return (
        <div>
            <h1>Note Book</h1>
            <div>
                <label htmlFor="search">Search Notes: </label>
                <input id="search" type="text" />
            </div>
            <div>
                <div>Total Notes: {}</div>
                <div>Showing: {}</div>
            </div>
            <div>
                <Button 
                type="Submit" 
                text="Add To Book"
                onClick={props.onAdd}
                />
            </div>
        </div>
    );
}

export default HomePage;