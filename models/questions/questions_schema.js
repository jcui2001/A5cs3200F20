const mongoose = require('mongoose')
const questionsSchema = mongoose.Schema({
    question: String,
    options: [String],
    quizId: Number
}, {collection: 'quizzes'})
module.exports = questionsSchema