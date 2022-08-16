import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL, HTTP_STATUS } from "../../app/constants";

const namespace = "survey";

export const fetchSurveyData = createAsyncThunk(
  `${namespace}/fetchSurveyData`,
  async () => {
    const { data } = await axios.get(`${API_URL}`);
    return data;
  }
);

const surveySlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSurveyData.pending, (state) => {
      state.loading = HTTP_STATUS.PENDING;
    });
    builder.addCase(fetchSurveyData.fulfilled, (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
    });
    builder.addCase(fetchSurveyData.rejected, (state) => {
      state.loading = HTTP_STATUS.REJECTED;
    });
  },
});

export default surveySlice.reducer;
