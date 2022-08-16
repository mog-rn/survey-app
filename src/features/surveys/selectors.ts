import { RootState } from "../../app/store";

export const selectLoadingStatus = (state: RootState) => state.survey.loading
export const selectData = (state: RootState) => state.survey.data