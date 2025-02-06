const Message = require("./models/messageModel"); // Import message model


// Fetch previous messages between a user and a volunteer
app.get("/messages/:senderId/:receiverId", async (req, res) => {
  const { senderId, receiverId } = req.params;

  try {
    const chatMessages = await Message.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId }
      ]
    }).sort({ timestamp: 1 });

    res.json(chatMessages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});
