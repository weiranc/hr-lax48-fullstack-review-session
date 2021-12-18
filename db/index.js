const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/hrla48-fullstack-review';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

module.exports = db;