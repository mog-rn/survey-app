import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function createData(
  surveyId: number,
  question1: string,
  question2: string,
  question3: string
) {
  return { surveyId, question1, question2, question3 };
}

const rows = [
  createData(1, "Answer1", "Answer3", "Answer2"),
  createData(2, "Answer1", "Answer3", "Answer2"),
  createData(3, "Answer1", "Answer3", "Answer2"),
  createData(4, "Answer1", "Answer3", "Answer2"),
];

const Responses = () => {
  return (
    <TableContainer component={Paper} sx={{border: '1px solid black'}}>
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
            <TableCell
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
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Responses;
