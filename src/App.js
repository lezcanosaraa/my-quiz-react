import React from "react";
import "./App.css";
import { questions } from "./questions.js";
import { useState } from "react";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const restarQuiz = () => {
    setScore(0)
    setCurrentQuestion(0)
    setShowScore(false)
  }

  return (
    <div className="App">
      {showScore ? (
        <div className="showScore">
          <h1>
            Your score is {score} out of {questions.length}
          </h1>
          <button onClick={() => restarQuiz()} className="buttonQuiz">Restar the quiz</button>
        </div>
      ) : (
        <>
          <section className="question-wrap">
            <h1>
              Question {currentQuestion + 1}/{questions.length}
            </h1>
            <p>{questions[currentQuestion].questionText}</p>
            <ul>
              {questions[currentQuestion].answerOptions.map((answerText) => (
                <li
                  onClick={() => optionClicked(answerText.isCorrect)}
                  key={answerText.id}
                >
                  {answerText.answerText}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}
