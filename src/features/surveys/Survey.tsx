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
        <div>
          {data.questions.map((question: any) => (
            <div key={question.id}>
              <h1>{question.question_text}</h1>
              <p>{question.answer_type}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Survey;
