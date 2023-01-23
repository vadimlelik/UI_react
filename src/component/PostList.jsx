import React from "react";
import Post from "./Post";

const PostList = ({ posts, handleCloseModal, handleOpenModal }) => {
    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <Post
                        {...post}
                        key={post.id}
                        handleCloseModal={handleCloseModal}
                        handleOpenModal={handleOpenModal}
                    />
                ))}
            </ul>
        </div>
    );
};

export default PostList;
