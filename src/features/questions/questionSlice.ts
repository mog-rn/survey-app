import { createSlice } from "@reduxjs/toolkit";

export interface QuestionState {
    value: number
}

const initialState: QuestionState = {
    value: 0
}

// export const questionsSlice = createSlice({
//     'question',
//     initialState,
//     reducers: {
//         increment: () => {}
//     }

// })