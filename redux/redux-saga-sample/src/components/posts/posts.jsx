import React from "react";
import Post from "./post";
import styled from "styled-components";

const PostsWrapper = styled.ul`
  text-align: center;
  li {
    border: 3px solid #7dc0ff;
    margin-top: 20px;
    margin-right: 5%;
  }
`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin-top: 3%;
  margin-left: 3%;
  padding: 0.25em 1em;
`;

const Posts = ({
  posts,
  title,
  body,
  onChangeTitleFunc,
  onChangeBodyFunc,
  onGetPostsFunc,
  onClickAddPost,
}) => {
  return (
    <div>
      <Button onClick={onGetPostsFunc}>Get Posts</Button>
      <input value={title} onChange={onChangeTitleFunc} placeholder="title" />
      <input
        value={body}
        onChange={onChangeBodyFunc}
        placeholder="description"
      />
      <Button onClick={onClickAddPost}>Add Item</Button>

      <PostsWrapper>
        <ul>
          {posts.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
        </ul>
      </PostsWrapper>
    </div>
  );
};

export default Posts;
