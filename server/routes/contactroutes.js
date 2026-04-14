const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

// POST new contact message
router.post("/", async (req, res) => {
  const { fullName, email, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  
  try {
    const newMessage = new Contact({ fullName, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;