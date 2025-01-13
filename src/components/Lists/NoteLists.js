import Button from "../UI/Button";


const NoteLists = (props) => {

    return (
        <div>
            <ul>
                <li>
                    <div>
                        <h2>{props.title}</h2>
                        <div>{props.description}</div>
                    </div>
                    <div>
                        <Button type="submit" text="Edit" onClick={props.onEdit} />
                        <Button type="submit" text="Delete" onClick={props.onDelete} />
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default NoteLists;