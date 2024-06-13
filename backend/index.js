const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8000;

const companyRoutes = require('./routes/companies');
const authRoutes = require('./routes/auth');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/companyapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true  // You may need this depending on your setup
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/companies', companyRoutes);
app.use('/api/auth', authRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
