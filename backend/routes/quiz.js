const express = require('express');
const router = express.Router();
const Quiz = require('../models/quizModel');
const quizController = require('../controllers/quizController');

// GET /api/quiz
router.get('/', quizController.getQuizQuestions);

// POST /api/quiz/submit
router.post('/submit', quizController.submitQuizAnswers);

module.exports = router;