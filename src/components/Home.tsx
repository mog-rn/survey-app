import React from 'react'
import { Button, Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        justifyItems: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Welcome to this Survey App</Typography>
      <Button variant="contained"><Link to="survey">Take the Survey</Link></Button>
      <Button variant="contained" color="success">
        <Link to="responses">View your response</Link>
      </Button>
    </Box>
  )
}

export default Home