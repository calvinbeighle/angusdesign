// server.js
require('dotenv').config(); // If using a .env
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');

// Create app
const app = express();

// Session Middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'CHANGE_THIS_SECRET',
  resave: false,
  saveUninitialized: false
}));

// Passport
require('./config/passport-config'); // We'll create this file next
app.use(passport.initialize());
app.use(passport.session());

// Serve static files in "public" (optional, if you have a public folder)
app.use(express.static(path.join(__dirname, 'public')));

// Authentication routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Example routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/portal', (req, res) => {
  // If you want to protect /portal, you could do a check here:
  if (!req.user) return res.redirect('/signin-failed');
  res.sendFile(path.join(__dirname, 'portal.html'));
});

app.get('/signin-failed', (req, res) => {
  res.send('Sign in failed. Please try again.');
});

app.get('/dashboard', (req, res) => {
  if (!req.user) return res.redirect('/');
  res.send('Secure dashboard - user is authenticated.');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
