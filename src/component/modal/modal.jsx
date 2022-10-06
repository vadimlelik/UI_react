import React, {useEffect} from "react";
import "./modal.scss";

const Modal = ({isVisible = false, title, children, onClose}) => {

    // const keydownHandler = ({ key }) => {
    //   switch (key) {
    //     case "Escape":s
    //       onClose();
    //       break;
    //     default:
    //   }
    // };

    // useEffect(() => {
    //   document.addEventListener("keydown", keydownHandler);

    //   return () => document.removeEventListener("keydown", keydownHandler);
    // });

    return !isVisible ? null : (
        <div className="modal" onClick={onClose}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">{title}</h3>
                    <span className="modal-close" onClick={onClose}>
            &times;
          </span>
                </div>
                <div className="modal-body">
                    <div className="modal-content">{children}</div>
                </div>
            </div>
        </div>
    );
};
export default Modal;
