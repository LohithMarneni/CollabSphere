const express = require("express");
const { handleLogin } = require("../../controllers/volunteerControllers/loginController");
const router = express.Router();
router.post("/", handleLogin);
module.exports = router;