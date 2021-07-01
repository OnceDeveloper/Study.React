import React from 'react';

const Post = ({ post }) => {
    return (
        <li>
            <h2>{post.title}</h2>
            <h4>{post.body}</h4>
        </li>

    )
};

export default Post;