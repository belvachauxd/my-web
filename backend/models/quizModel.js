const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correct: {
    type: Number,
    required: true
  }
});

module.exports  = mongoose.model('Quiz', quizSchema);

