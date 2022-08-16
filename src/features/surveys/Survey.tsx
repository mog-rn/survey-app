import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { HTTP_STATUS } from "../../app/constants";
import { useAppDispatch } from "../../app/hooks";
import { selectData, selectLoadingStatus } from "./selectors";
import { fetchSurveyData } from "./surveySlice";

const Survey = () => {
  const dispatch = useAppDispatch();
  const loading = useSelector(selectLoadingStatus);
  const data = useSelector(selectData);

  // console.log(data.questions);

  useEffect(() => {
    dispatch(fetchSurveyData());
  }, [dispatch]);

  return (
    <div>
      {loading === HTTP_STATUS.PENDING && <div>Loading...</div>}
      {loading === HTTP_STATUS.REJECTED && <div>Error!!</div>}
      {loading === HTTP_STATUS.FULFILLED && (
        <Box
          sx={{
            padding: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            autoComplete="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid black",
              width: "500px",
              padding: "10px"
            }}
          >
            {/* <Typography as="h4" mt={2}>
              Welcome to this Farmer Survey
            </Typography> */}
            {data.questions.map((question: any) => (
              <>
                <div key={question.id}>
                  <Typography>{data.strings.en[question.id]}</Typography>
                  <TextField required sx={{ margin: "10px" }} />
                </div>
                <Button sx={{ border: "1px solid blue" }}>Next</Button>
              </>
              
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Survey;
