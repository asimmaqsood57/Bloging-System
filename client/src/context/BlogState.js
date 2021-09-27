import BlogContext from "./BlogContext";

import React from "react";

const BlogState = (props) => {
  const checked = "asim";
  const checked1 = () => {
    // console.log("you can write anything here");
  };

  return (
    <BlogContext.Provider value={{ checked, checked1 }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
