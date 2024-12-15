import React from "react";
import { AnswersCard } from "./answers-card";
import { Button } from "../common/button";


export const SurveyCard = ({
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
        <div>
          <span style={{ fontSize: 18, fontWeight: "bold" }}>{title}</span>
        </div>
  
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