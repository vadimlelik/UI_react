import React from "react";

import style from "./post.module.css";

const Post = ({ title, handleOpenModal }) => {
    return (
        <div className={style.postContainer} onClick={handleOpenModal}>
            <div>{title}</div>
        </div>
    );
};

export default Post;
