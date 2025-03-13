import React from "react";

const Question = ({ question, onAnswerClick, skipQuestion }) => {
  return (
    <div className="w-200 border-2 m-auto mt-4 p-3">
      <h1 className="text-2xl">{question.question}</h1>
      <button onClick={() => skipQuestion()}>Skip Question</button>
      <ul className="grid grid-cols-2 gap-2 mt-5">
        {question.answerOptions.map((answer, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  onAnswerClick(answer.isCorrect);
                }}
                className="w-full p-2 border-1 border-amber-200 cursor-pointer hover:bg-amber-200"
              >
                {answer.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
