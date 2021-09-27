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
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the {checked}
        </Typography>
        <Typography variant="h5" component="div">
          Software Engineer
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default BlogItem;
