const Message = require("./models/messageModel");

app.post("/message", async (req, res) => {
  const { senderId, receiverId, message } = req.body;

  if (!senderId || !receiverId || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Save message in DB
    const newMessage = await Message.create({ senderId, receiverId, message });

    // Trigger Pusher only for the specific chat
    pusher.trigger(`chat-${senderId}-${receiverId}`, "message", newMessage);

    res.json({ success: true, message: "Message sent", data: newMessage });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
