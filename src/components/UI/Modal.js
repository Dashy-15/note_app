import classes from "./Modal.module.css";

const Modal = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.modal}>{props.children}</div>
        </div>
    );
}

export default Modal;