import BlogContext from "./BlogContext";

import React from "react";

const BlogState = (props) => {
  const checked = {
    title: "Software Developer",
    description:
      "We are software developers. Our work is to  build new softwares",
  };

  return (
    <BlogContext.Provider value={{ checked }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
