import React from "react";
import style from "./modal.module.css";

const Modal = ({ children, handleCloseModal, refModal }) => {
    // onClick={(e) => e.stopPropagation()}
    return (
        <div className={style.modal} ref={refModal}>
            <div className={style.modalDialog}>
                <div className={style.modalHeader}>
                    <span
                        className={style.modalClose}
                        onClick={handleCloseModal}
                    >
                        &times;
                    </span>
                </div>
                <div className={style.modalBody}>
                    <div className={style.modalContent}>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
