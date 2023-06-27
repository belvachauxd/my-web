import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import quizData from '../context/QuizContext';

function Result() {
  const location = useLocation();
  const [answers] = useState(location.state?.answers ?? []);

  const numCorrect = answers.reduce((acc, curr, idx) => {
    return curr === quizData[idx].correct ? acc + 1 : acc;
  }, 0);

  const incorrectAnswers = answers.reduce((acc, curr, idx) => {
    if (curr !== quizData[idx].correct) {
      acc.push({ question: quizData[idx], userAnswer: curr });
    }
    return acc;
  }, []);

  return (
    <div>
      <h1>Results</h1>
      <p>You got {numCorrect} out of {quizData.length} questions correct!</p>
      {incorrectAnswers.length > 0 && (
        <div>
          <h2>Incorrect Answers:</h2>
          {incorrectAnswers.map((item, idx) => (
            <div key={idx}>
              <p>{`Question ${idx + 1}: ${item.question.text}`}</p>
              <p>{`Your answer: ${item.question.options[item.userAnswer]}`}</p>
              <p>{`Correct answer: ${item.question.options[item.question.correct]}`}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Result;