const express = require('express');
const { body } = require('express-validator');
const { submitContact, getContacts } = require('../controllers/contact.controller');

const router = express.Router();

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('subject')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters'),
];

// POST /api/contact — Submit contact form
router.post('/', contactValidation, submitContact);

// GET /api/contact — Fetch all messages (add auth middleware in production)
router.get('/', getContacts);

module.exports = router;
