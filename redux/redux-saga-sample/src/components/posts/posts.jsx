import React from "react";
import Post from "./post";

const Posts = ({
  posts,
  onChangeTitleFunc,
  onChangeDescripFunc,
  onGetPostsFunc,
  onAddPostFunc,
  title,
  description,
}) => {
  return (
    <div>
      <button onClick={onGetPostsFunc}>Get Posts</button>

      <input value={title} onChange={onChangeTitleFunc} placeholder="title" />
      <input
        value={description}
        onChange={onChangeDescripFunc}
        placeholder="description"
      />
      <button onClick={onAddPostFunc}>Add Item</button>

      <ul>
        {
          posts.map(post => {
            return (
              <Post post={post} key={post.id} />
            )
          })
        }

      </ul>
    </div>
  );
};

export default Posts;
