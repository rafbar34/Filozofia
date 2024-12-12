import React, { useState } from "react";
import { SURVEYDATA, type_answers_enum } from "../data/survey-data";
import { cache } from "../utils/cache-controller";

export const SurveyPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerData, setAnswerData] = useState([]);
  const {title, answers, type, id} = SURVEYDATA.data[`${currentQuestion}`] ?? []

  const nextQuestion = () => {
    cache.set(`survey-question-${id}`, answerData);
    setAnswerData([]);
    setCurrentQuestion(currentQuestion + 1);
  };
  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  return (
    <div
      style={{
        height: "88vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Ankieta
      </div>
      <div
        style={{
          background: "#e3f2fd",
          minHeight: "60%",
          width: "50%",
          borderRadius: 8,
          padding: 20,
          border: "1px solid rgba(44, 62, 80, 0.5)",
        }}
      >
        {SURVEYDATA.data[`${currentQuestion}`]?.id <= 6 && (
          <SurveyCard
            title={title}
            answers={answers}
            type={type}
            nextQuestion={nextQuestion}
            prevQuestion={prevQuestion}
            setAnswerData={setAnswerData}
            answerData={answerData}
            id={id}
          />
        )}
      </div>
    </div>
  );
};

const SurveyCard = ({
  title,
  answers,
  nextQuestion,
  prevQuestion,
  id,
  setAnswerData,
  answerData,
  type,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        alignItems: "center",
      }}
    >
      <div>{title}</div>

      <AnswersCard
        answerData={answerData}
        setAnswerData={setAnswerData}
        answers={answers}
        type={type}
      />

      <div
        style={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        {id !== 0 ? (
          <Button
            title={"Poprzednie"}
            handleChangeQuestion={prevQuestion}
          />
        ) : (
          <div />
        )}
        <Button
          title={"Następne"}
          handleChangeQuestion={nextQuestion}
        />
      </div>
    </div>
  );
};

const AnswersCard = ({ answers, setAnswerData, answerData, type }) => {
  return (
    <div style={{ width: "50%" }}>
      {answers.map((answer) => {
        const dependsType =
          type === type_answers_enum.single
            ? answerData[0]?.key === answer?.key
            : answerData.some((item) => item?.key === answer?.key);
        return (
          <div
            onClick={() => {
              const isInArray =answerData.some((item) => item?.key === answer?.key);
              if (!isInArray) {
                if (type === type_answers_enum.multi) {
                  setAnswerData((prev) => [...prev, answer]);
                } else {
                  setAnswerData([answer]);
                }
              } else {
                const removedItem=answerData.filter((item) => item?.key !== answer?.key);
                setAnswerData(removedItem);
              }
            }}
            style={{
              margin: "10px 0px",
              padding: "10px",
              borderRadius: 16,
              textAlign: "center",
              background: dependsType ? "green" : "white",
              width: "100%",
              fontSize: 20,
            }}
          >
            {answer.answer}
          </div>
        );
      })}
    </div>
  );
};

const Button = ({ handleChangeQuestion, title = "" }) => {
  return (
    <div
      style={{ padding: "10px 20px", background: "white", borderRadius: 8 }}
      onClick={handleChangeQuestion}
    >
      {title}
    </div>
  );
};
