import React, { useState } from "react";
import "./App.css";
import questions from "./question.json";
import Question from "./Components/Question";
import Result from "./Components/Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const handleNextQuestion = (isCorrect) => {
    setUserAnswer([...userAnswer, isCorrect]);
    setCurrentQuestion(currentQuestion + 1);
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer([]);
  };

  const skipQuestion = () => {
    if (window.confirm("Are you sure you want to skip this question?")) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer([...userAnswer, false]);
    }
  };
  return (
    <div className="text-center mt-5">
      <h1 className="text-3xl text-red-400">Quiz App</h1>
      {questions.length > currentQuestion ? (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
          skipQuestion={skipQuestion}
        />
      ) : (
        <Result
          userAnswer={userAnswer}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
