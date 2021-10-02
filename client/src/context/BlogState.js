// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZWQwNTA5YjM5MWQ0ZDVlYjRmNjg3In0sImlhdCI6MTYzMzEwODQ5OX0.Wefgee7TmaGzKjooxe-acPLSDIlpGpXbJPoaKvxVWpg

import BlogContext from "./BlogContext";

import React, { useState } from "react";

const BlogState = (props) => {
  const host = "http://localhost:3001";
  const checked = {
    title: "Software Developer",
    description:
      "We are software developers. Our work is to  build new softwares",
  };

  const blogsIntitialState = [];

  const [blogs, setblogs] = useState(blogsIntitialState);

  const getBlogs = async () => {
    const response = await fetch(`${host}/api/blog/fetchallblogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZWQwNTA5YjM5MWQ0ZDVlYjRmNjg3In0sImlhdCI6MTYzMzEwODQ5OX0.Wefgee7TmaGzKjooxe-acPLSDIlpGpXbJPoaKvxVWpg",
      },
    });

    const json = await response.json();
    // console.log(json );
    setblogs(json);
  };

  return (
    <BlogContext.Provider value={{ checked, getBlogs, blogs }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
