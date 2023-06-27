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

  const isLastQuestion = currentQuestion.id === quizData.length;

  return (
    <div className="quiz-container">
      <h1>Bias Awareness Quiz</h1>
      <form onSubmit={handleSubmit} className="quiz-form">
        <div className="question-container">
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
        <div className="button-container">
          <button type="submit">Submit Answer</button>
          {isLastQuestion && (
            <button onClick={() => navigate('/results')}>View Results</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Quiz;