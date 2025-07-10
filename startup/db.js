const winston = require('winston');
const mongoose = require('mongoose');

winston.add(new winston.transports.Console());
winston.add(new winston.transports.File({ filename: 'logfile.log' }));

module.exports = function () {
  mongoose.connect('mongodb://localhost/videovault')
    .then(() => winston.info('MongoDB Connected...'))
}