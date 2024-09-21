const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(cors());

let users = [];  // This is a mock database

// Register route
app.post('/api/register', (req, res) => {
  const { username, password, email, age, city, level, phone } = req.body;
  if (!username || !password || !email || !age || !city || !level || !phone) {
    return res.status(400).send({ message: 'All fields are required' });
  }
  
  users.push(req.body);  // Add user to the mock database
  res.status(201).send({ message: 'User registered successfully' });
});

// Server running
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
