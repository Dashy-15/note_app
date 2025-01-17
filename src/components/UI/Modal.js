import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClick}></div>
    );
}

const Layout = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.modal}>{props.children}</div>
        </div>
    );
}

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClose} />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<Layout>{props.children}</Layout>, document.getElementById("layout-root"))}
        </Fragment>
    );
}

export default Modal;