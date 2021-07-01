import React from "react";

const Posts = ({
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
    </div>
  );
};

export default Posts;
