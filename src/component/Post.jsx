import React from "react";
import { useContext } from "react";
import { modalContext } from "../context/ModalContext";

import style from "./post.module.css";

const Post = ({ title }) => {
    const { handleOpenModal } = useContext(modalContext);
    return (
        <div className={style.postContainer} onClick={handleOpenModal}>
            <div>{title}</div>
        </div>
    );
};

export default Post;
