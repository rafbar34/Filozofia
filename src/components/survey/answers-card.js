import React from "react";
import { type_answers_enum } from "../../data/survey-data";

export const AnswersCard = ({ answers, setAnswerData, answerData, type }) => {
  return (
    <div style={{ width: "50%" }}>
      {answers.map((answer) => (
        <AnswerCard
          answerData={answerData}
          answer={answer}
          setAnswerData={setAnswerData}
          type={type}
        />
      ))}
    </div>
  );
};

const AnswerCard = ({ answerData, answer, setAnswerData, type }) => {
  const dependsType =
    type === type_answers_enum.single
      ? answerData[0]?.key === answer?.key
      : answerData.some((item) => item?.key === answer?.key);

  const chooseAnswer = () => {
    const isInArray = answerData.some((item) => item?.key === answer?.key);
    if (!isInArray) {
      if (type === type_answers_enum.multi) {
        setAnswerData((prev) => [...prev, answer]);
      } else {
        setAnswerData([answer]);
      }
    } else {
      const removedItem = answerData.filter(
        (item) => item?.key !== answer?.key
      );
      setAnswerData(removedItem);
    }
  };
  return (
    <div
      onClick={chooseAnswer}
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
};
