import React, { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";
import { selectData, selectLoadingStatus } from "../features/surveys/selectors";
import { HTTP_STATUS } from "../app/constants";
import { fetchSurveyData } from "../features/surveys/surveySlice";

const Home = () => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const dispatch = useAppDispatch()
    const loading = useSelector(selectLoadingStatus)
    const data = useSelector(selectData)

    useEffect(() => {
      dispatch(fetchSurveyData())
    }, [])

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        justifyItems: "space-between",
        alignItems: "center",
        alignSelf: "center",
        width: '90vw',
        height: '100vh'
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "10px" }}>
        Welcome to this Survey App
      </Typography>
      <Button variant="contained" sx={{ marginBottom: "10px" }} onClick={handleClickOpen}>
        <Link to="survey">Take the Survey</Link>
      </Button>
      <Button variant="contained" color="success" sx={{ marginBottom: "10px" }}>
        {loading === HTTP_STATUS.PENDING && (<div>Please take the survey to view responses</div>)}
        {loading === HTTP_STATUS.FULFILLED && (<Link to="responses" state={data}>View your response</Link>)}
        {loading === HTTP_STATUS.REJECTED && (<div>Encountered an error</div>)}
      </Button>
    </Box>
  );
};

export default Home;
