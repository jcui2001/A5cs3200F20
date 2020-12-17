const mongoose = require('mongoose')
const quizzesSchema = mongoose.Schema({
    name: String
}, {collection: 'quizzes'})
module.exports = quizzesSchema