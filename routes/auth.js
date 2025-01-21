// routes/auth.js
const express = require('express');
const passport = require('passport');

const router = express.Router();

// Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/signin-failed' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// Apple
router.get('/apple', passport.authenticate('apple'));
router.post('/apple/callback',
  passport.authenticate('apple', { failureRedirect: '/signin-failed' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

module.exports = router;
