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
    question3: string,
) {

    return {surveyId, question1, question2, question3}
}

const rows = [
    createData(1, 'Answer1', 'Answer3', 'Answer2')
]

const Responses = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Survey ID</TableCell>
            <TableCell>Question 1</TableCell>
            <TableCell>Question 2</TableCell>
            <TableCell>Question 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
                <TableRow>
                    <TableCell>{row.surveyId}</TableCell>
                    <TableCell>{row.question1}</TableCell>
                    <TableCell>{row.question2}</TableCell>
                    <TableCell>{row.question3}</TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Responses;
