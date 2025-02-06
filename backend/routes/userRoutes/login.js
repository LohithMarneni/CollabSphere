const express = require("express");
const { handleLogin } = require("../../controllers/userControllers/loginController");
const router = express.Router();
router.post("/", handleLogin);
module.exports = router;