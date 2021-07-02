import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getPostsFunc, addPostFunc } from "../store/posts";
import Posts from "../components/posts/posts";
import { useEffect } from "react";

const PostsContainer = () => {
  const { posts } = useSelector((state) => state.posts, shallowEqual);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onGetPostsFunc = () => dispatch(getPostsFunc());
  const onAddPostFunc = () => {
    dispatch(addPostFunc({ title, body }));
  };
  const onChangeTitleFunc = (e) => {
    setTitle(e.target.value);
  };
  const onChangeBodyFunc = (e) => {
    setBody(e.target.value);
  };

  const onClickAddPost = () => {
    if (title && body) {
      setTitle("");
      setBody("");
      onAddPostFunc();
    } else alert("Please fill in the blanks");
  };

  //useEffect(onGetPostsFunc, [dispatch]);

  return (
    <Posts
      posts={posts}
      title={title}
      body={body}
      onChangeTitleFunc={onChangeTitleFunc}
      onChangeBodyFunc={onChangeBodyFunc}
      onGetPostsFunc={onGetPostsFunc}
      onClickAddPost={onClickAddPost}
    />
  );
};

export default PostsContainer;
