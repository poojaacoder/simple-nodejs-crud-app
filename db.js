const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/emp_database', { useNewUrlParser: true });
mongoose.connect("connextion_string ", {useNewUrlParser: true})


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});

module.exports = { mongoose, db}