import React from "react";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const Posts = async () => {
  const posts = await fetchData();

  return (
    <>
      <h1>Welcome to the Posts page</h1>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </>
  );
};
export default Posts;
