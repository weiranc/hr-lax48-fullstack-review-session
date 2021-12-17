const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const studentSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  imageUrl: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;