import Button from "../UI/Button";

const Lists = (props) => {
    return (
        <li>
            <div>
                <h2>{props.title}</h2>
                <div>{props.description}</div>
            </div>
            <div>
                <Button type="submit" text="Edit" onClick={props.onEdit} />
                <Button type="submit" text="Delete" onClick={props.onRemove} />
            </div>
        </li>
    );
}

export default Lists;