// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ContactModel = require('./models/Contact');
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://Visual:MkkLJ47zV6fbrvyn@cluster0.qq1gvxz.mongodb.net/contactFormDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS for all origins
app.use(cors());

// Define routes
app.post('/api/contact', async (req, res) => { // Changed route to '/api/contact'
  try {
    const { email, subject, message } = req.body;
    const contact = new ContactModel({ email, subject, message });
    await contact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'An error occurred while saving contact' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
