import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { HTTP_STATUS } from "../app/constants";
import { useAppDispatch } from "../app/hooks";
import { selectData, selectLoadingStatus } from "../features/surveys/selectors";
import { fetchSurveyData } from "../features/surveys/surveySlice";

const Responses = () => {
  const dispatch = useAppDispatch();
  const loading = useSelector(selectLoadingStatus);
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchSurveyData());
  }, []);

  return (
    <>
      {loading === HTTP_STATUS.PENDING && <div>Loading...</div>}
      {loading === HTTP_STATUS.FULFILLED && (
        <TableContainer component={Paper} sx={{ border: "1px solid black" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    border: "1px solid black",
                    textAlign: "center",

                    fontSize: "18px",
                  }}
                >
                  Survey ID
                </TableCell>
                {data.questions.map((question: any) => (
                  <TableCell
                    key={question.id}
                    sx={{
                      fontWeight: "bold",
                      border: "1px solid black",
                      textAlign: "center",

                      fontSize: "18px",
                    }}
                  >
                    {data.strings.en[question.id]}
                  </TableCell>
                ))}
                {/* <TableCell
              sx={{
                fontWeight: "bold",
                border: "1px solid black",
                textAlign: "center",

                fontSize: "18px",
              }}
            >
              Question 1
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                border: "1px solid black",
                textAlign: "center",

                fontSize: "18px",
              }}
            >
              Question 2
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                border: "1px solid black",
                textAlign: "center",

                fontSize: "18px",
              }}
            >
              Question 3
            </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map((row) => (
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>{row.surveyId}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {row.question1}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {row.question2}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {row.question3}
              </TableCell>
            </TableRow>
          ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Responses;
