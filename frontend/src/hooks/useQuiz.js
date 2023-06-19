import { createContext, useContext, useState, useEffect } from 'react';

const QuizContext = createContext();

export function useQuiz() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the server and set them in state
    const fetchQuestions = async () => {
      const response = await fetch('/api/questions');
      const data = await response.json();
      setQuestions(data);
    };
    fetchQuestions();
  }, []);

  const submitAnswers = async (answers) => {
    // Submit the answers to the server
    await fetch('/api/answers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers),
    });
  };

  const value = { questions, submitAnswers };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}