import { useState } from 'react';

export const useQuiz = (quizData) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const submitAnswer = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (question.correct === answers[index]) {
        score += 1;
      }
    });
    console.log(`You scored ${score} out of ${quizData.length}`);
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return {
    currentQuestion,
    submitAnswer,
  };
};