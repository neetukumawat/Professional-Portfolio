const { validationResult } = require('express-validator');
const Contact = require('../models/Contact.model');

/**
 * @desc    Submit contact form
 * @route   POST /api/contact
 * @access  Public
 */
const submitContact = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
  }

  const { name, email, subject, message } = req.body;

  try {
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      ip: req.ip,
    });

    // Optional: Send email notification (if nodemailer is configured)
    // await sendEmailNotification(contact);

    return res.status(201).json({
      success: true,
      message: "Message received! I'll get back to you soon.",
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit message. Please try again later.',
    });
  }
};

/**
 * @desc    Get all contacts (admin)
 * @route   GET /api/contact
 * @access  Private (admin only – add auth middleware before using in production)
 */
const getContacts = async (req, res) => {
  try {
    const { page = 1, limit = 20, status } = req.query;
    const filter = status ? { status } : {};

    const [contacts, total] = await Promise.all([
      Contact.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(Number(limit))
        .select('-ip'),
      Contact.countDocuments(filter),
    ]);

    return res.json({
      success: true,
      data: contacts,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch messages.' });
  }
};

module.exports = { submitContact, getContacts };
