import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useQuiz } from '../hooks/useQuiz';

function Quiz() {
  const navigate = useNavigate();
  const { questions, submitAnswers } = useQuiz();
  const [answers, setAnswers] = useState([]);

  const handleAnswerChange = (questionIndex, answerIndex) => {
    // Create a copy of the answers array and update the selected answer for the current question
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitAnswers(answers);
    navigate('/results');
  };

  return (
    <div>
      <h1>Bias Awareness Quiz</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <h2>{question.text}</h2>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="radio"
                  id={`q${questionIndex}-o${optionIndex}`}
                  name={`q${questionIndex}`}
                  value={optionIndex}
                  checked={answers[questionIndex] === optionIndex}
                  onChange={() => handleAnswerChange(questionIndex, optionIndex)}
                />
                <label htmlFor={`q${questionIndex}-o${optionIndex}`}>{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit Answers</button>
      </form>
    </div>
  );
}

export default Quiz;