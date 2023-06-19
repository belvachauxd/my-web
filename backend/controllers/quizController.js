const Quiz = require('../models/quizModel');

// GET /api/quiz
exports.getQuizQuestions = (req, res) => {
  // Retrieve all quiz questions from the database
  Quiz.find({}, (err, questions) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Return the quiz questions as a JSON response
    return res.json(questions);
  });
};

// POST /api/quiz/submit
exports.submitQuizAnswers = (req, res) => {
  // Retrieve the submitted quiz answers from the request body
  const submittedAnswers = req.body.answers;

  // Retrieve the correct answers from the database
  Quiz.find({}, (err, questions) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Check each submitted answer against the correct answer
    const results = submittedAnswers.map((answer, index) => {
      const correctAnswer = questions[index].correct;
      return answer === correctAnswer;
    });

    // Calculate the overall quiz score
    const score = results.filter(result => result === true).length;

    // Return the quiz results as a JSON response
    return res.json({ results, score });
  });
};