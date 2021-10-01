import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BlogContext from "../context/BlogContext";

import { useContext } from "react";
const BlogItem = () => {
  const context = useContext(BlogContext);

  const { checked } = context;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {checked.title}
        </Typography>

        <Typography variant="body2">
          {checked.description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default BlogItem;
