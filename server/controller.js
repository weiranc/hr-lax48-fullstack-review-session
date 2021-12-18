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
      Student.create({name: req.body.name, imageUrl: req.body.imgurl})
        .then(response => {
          res.status(201).send(response);
        })
        .catch(err => {
          console.error(err);
        })
    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name
      Student.findOneAndUpdate({_id: req.params.id}, {name: req.body.name})
        .then(response => {
          res.status(200).send(response);
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
};

module.exports = controller