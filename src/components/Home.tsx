import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        justifyItems: "space-between",
        alignItems: "center",
        padding: "220px",
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "10px" }}>
        Welcome to this Survey App
      </Typography>
      <Button variant="contained" sx={{ marginBottom: "10px" }} onClick={handleClickOpen}>
        Take the Survey
      </Button>
      <Button variant="contained" color="success" sx={{ marginBottom: "10px" }}>
        <Link to="responses">View your response</Link>
      </Button>
    </Box>
  );
};

export default Home;
