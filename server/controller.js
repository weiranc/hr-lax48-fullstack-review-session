const mongoose = require('mongoose');
const Student = require('../db/Student.js');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      Student.find()
        .then(response => {
          res.send(response);
        })
        .catch(err => {
          console.error(err);
        })
    },
    postStudent: function (req, res) {
      // TODO: add your code here to add a new student

    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name

    }
  }
};

module.exports = controller