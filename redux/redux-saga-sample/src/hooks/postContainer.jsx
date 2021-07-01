import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPostsFunc, addPostFunc } from "../store/posts";
import Posts from "../components/posts/posts";

const PostsContainer = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onGetPostsFunc = () => dispatch(getPostsFunc());
  const onAddPostFunc = () => dispatch(addPostFunc({ title, description }));

  const onChangeTitleFunc = (e) => {
    setTitle(e.target.value);
  };
  const onChangeDescripFunc = (e) => {
    setDescription(e.target.value);
  };

  return (
    <Posts
      title={title}
      description={description}
      onChangeTitleFunc={onChangeTitleFunc}
      onChangeDescripFunc={onChangeDescripFunc}
      onGetPostsFunc={onGetPostsFunc}
      onAddPostFunc={onAddPostFunc}
    />
  );
};

export default PostsContainer;
