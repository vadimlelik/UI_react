import React from 'react';
import Post from "./Post";

const PostList = ({posts}) => {
    return (
        <div>
            <ul>{posts.map((post) => <Post{...post} key={post.id} />)}</ul>
        </div>
    );
}

export default PostList;