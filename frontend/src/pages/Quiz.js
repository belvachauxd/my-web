import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import quizData from '../context/QuizContext';

function Quiz() {
  const navigate = useNavigate();
  const { currentQuestion, submitAnswer } = useQuiz(quizData);
  const [answerIndex, setAnswerIndex] = useState(null);

  const handleAnswerChange = (event) => {
    setAnswerIndex(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitAnswer(answerIndex);
    setAnswerIndex(null);
  };

  return (
    <div>
      <h1>Bias Awareness Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>{currentQuestion.text}</h2>
          {currentQuestion.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`option${index}`}
                name="answer"
                value={index}
                checked={index === answerIndex}
                onChange={handleAnswerChange}
              />
              <label htmlFor={`option${index}`}>{option}</label>
            </div>
          ))}
        </div>
        <button type="submit">Submit Answer</button>
      </form>
      <button onClick={() => navigate('/results')}>View Results</button>
    </div>
  );
}

export default Quiz;