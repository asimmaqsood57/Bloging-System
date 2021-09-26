import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
const AddBlog = () => {
  return (
    <>
      <Container maxWidth="sm">
        <h1>Title</h1>

        <Box
          sx={{
            width: 700,
            maxWidth: "100%",
          }}
        >
          <TextField fullWidth label="Blog Title" id="fullWidth" />

          <h1>Blog Description</h1>

          <TextField
            id="filled-multiline-flexible"
            sx={{
              mt: 1,
            }}
            label="Blog Content"
            multiline
            fullWidth
            variant="outlined"
            rows={5}
          />
        </Box>

        <Button variant="outlined" sx={{ mt: 2 }}>
          POST
        </Button>
      </Container>
    </>
  );
};

export default AddBlog;
