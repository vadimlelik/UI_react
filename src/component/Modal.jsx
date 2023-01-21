import React from 'react'
import style from './modal.module.css'

const Modal = ({children, handleCloseModal, }) => {
    // onClick={(e) => e.stopPropagation()}
    return <div className={style.modal}  >
        <div className={style.modalDialog}>
            <div className={style.modalHeader}>
                <span className={style.modalClose} onClick={handleCloseModal}>
            &times;
          </span>
            </div>
            <div className={style.modalBody}>
                <div className={style.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    </div>
}


export default Modal