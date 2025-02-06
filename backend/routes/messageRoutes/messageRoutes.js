const express = require("express");
const Message = require("../model/Message.model.js");
const { verifyJWT } = require("../middleware/verifyJWT");
const Pusher = require("pusher");

const router = express.Router();

// Initialize Pusher
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  forceTLS: true,
});

// Fetch previous messages between a user and a volunteer
router.get("/:senderId/:receiverId", verifyJWT, async (req, res) => {
  let { senderId, receiverId } = req.params;

  // Ensure consistent order (smallest ID first) to keep the chat link same
  if (senderId > receiverId) {
    [senderId, receiverId] = [receiverId, senderId];
  }

  try {
    const chatMessages = await Message.find({
      chatId: `${senderId}-${receiverId}`, // Use a consistent chat ID format
    }).sort({ timestamp: 1 });

    res.json(chatMessages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// Send message between a user and a volunteer
router.post("/", verifyJWT, async (req, res) => {
  let { senderId, receiverId, message } = req.body;

  if (!senderId || !receiverId || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Ensure consistent chat ID order
  if (senderId > receiverId) {
    [senderId, receiverId] = [receiverId, senderId];
  }

  try {
    // Save message in DB
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
      chatId: `${senderId}-${receiverId}`, // Use consistent chat ID
      timestamp: new Date(),
    });

    // Trigger Pusher only for this chat
    pusher.trigger(`chat-${senderId}-${receiverId}`, "message", newMessage);

    res.json({ success: true, message: "Message sent", data: newMessage });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
