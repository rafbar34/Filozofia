import React, { useState } from "react";
import { SURVEYDATA } from "../data/survey-data";
import { cache } from "../utils/cache-controller";
import { useNavigate } from "react-router-dom";
import { navigateTo } from "../utils/navigation";
import { Button } from "../components/common/button";
import { SurveyCard } from "../components/survey/survey-card";

export const SurveyPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerData, setAnswerData] = useState([]);
  const {
    title,
    answers,
    type,
    id = null,
  } = SURVEYDATA.data[`${currentQuestion}`] ?? [];

  const navigate = useNavigate();
  const isLast = !!cache.get("survey-question-6");
  console.log(isLast);
  const nextQuestion = () => {
    cache.set(`survey-question-${id}`, answerData);
    setAnswerData([]);
    setCurrentQuestion(currentQuestion + 1);
  };
  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleToCharts = () => {
    navigateTo("/charts", navigate);
  };
  const clearSurvey = () => {
    for (let i = 0; i <= 6; i++) {
      console.log(i);
      cache.remove(`survey-question-${i}`);
    }
    window.location.reload();
  };

  return (
    <div
      style={{
        height: "100%",
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
        {!isLast ? (
          SURVEYDATA.data[`${currentQuestion}`]?.id <= 6 && (
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
          )
        ) : (
          <InfoCard
            text={"Ankieta została juz uzupełniona"}
            text2={"Możesz ponowić ankiete lub sprawdzić wykresy"}
            handleButton={clearSurvey}
            handleButton2={handleToCharts}
            titleBtn={"Ponów"}
            titleBtn2={"Wykresy"}
          />
        )}
      </div>
    </div>
  );
};

const InfoCard = ({
  text,
  text2,
  handleButton,
  titleBtn,
  titleBtn2,
  handleButton2,
}) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div />
      <div style={{ textAlign: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
          {text}
        </div>
        <div style={{ fontSize: 18 }}>{text2}</div>
      </div>
      <div>
        <Button
          title={titleBtn}
          handleChangeQuestion={handleButton}
        />
        <Button
          title={titleBtn2}
          handleChangeQuestion={handleButton2}
        />
      </div>
    </div>
  );
};
