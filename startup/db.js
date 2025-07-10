const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

winston.add(new winston.transports.Console());
winston.add(new winston.transports.File({ filename: 'logfile.log' }));

module.exports = function () {
  const db = config.get('db');
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`))
}