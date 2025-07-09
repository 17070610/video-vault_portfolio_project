const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const home = require('./routes/home');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/videovault')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log('Could not connect to mongodb...',err));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers)
app.use('/', home);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
