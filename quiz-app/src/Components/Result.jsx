import React from "react";

const Result = ({ userAnswer, questions, resetQuiz }) => {
  //   console.log(userAnswer);
  const correctAnswer = userAnswer.filter((ans) => ans).length;

  //   console.log(correctAnswer);
  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          className="p-3 cursor-pointer hover:bg-amber-200 rounded-2xl border-2 mr-2"
          onClick={() => resetQuiz()}
        >
          Reset Quiz
        </button>
        <h1>
          You answered {correctAnswer} out of {questions.length}
        </h1>
      </div>

      <div>
        {questions.map((question, index) => {
          return (
            <div className="flex flex-col m-auto" key={index}>
              <h1>{question.question}</h1>
              <h1 className="ml-10">
                Your Answer: {userAnswer[index] ? "✅" : "❌"}
              </h1>
              <div>
                {question.answerOptions.map((answer, index) => {
                  return (
                    <h1 key={index}>
                      {answer.isCorrect ? (
                        <div>
                          The Right Answer is :
                          {answer.isCorrect ? `${answer.text}` : ""}
                        </div>
                      ) : (
                        " "
                      )}
                    </h1>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Result;
