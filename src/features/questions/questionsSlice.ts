import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../../app/store";

type RequestState = 'pending' | 'fulfilled' | 'rejected'

export const getQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/d628facc-ec18-431d-a8fc-9c096e00709a"
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

// const questionsSlice = createSlice({ name: "questions", initialState: {}});
