require("dotenv").config();
const express = require("express");
const Pusher = require("pusher");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { verifyJWT } = require("./middleware/verifyJWT");

const userRegisterRoute = require("./routes/userRoutes/register");
const userLoginRoute = require("./routes/userRoutes/login");
const volunteerRegisterRoute = require("./routes/VolunteerRoutes/register");
const volunteerLoginRoute = require("./routes/VolunteerRoutes/login");
const crudTaskRoutes = require("./routes/taskRoutes/Tasks");
// const messageRoutes = require("./routes/messageRoutes/messageRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Routes
app.use("/api/user/register", userRegisterRoute);
app.use("/api/user/login", userLoginRoute);
app.use("/api/volunteer/register", volunteerRegisterRoute);
app.use("/api/volunteer/login", volunteerLoginRoute);
app.use("/api/tasks", verifyJWT, crudTaskRoutes);
// app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the API");
});

app.all("*", (req, res) => {
  res.sendStatus(404);
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server Started... at port - ", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
