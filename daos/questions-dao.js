const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findQuestionById(qid)
const findQuestionsForQuiz = (qzid) => questionsModel.findQuestionById(qzid)
module.exports = { findAllQuestions, findQuestionById }