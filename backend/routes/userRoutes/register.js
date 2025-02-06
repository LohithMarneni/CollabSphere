const express = require("express");
const { handleRegister } = require("../../controllers/userControllers/registerController");
const router = express.Router();
router.post("/", handleRegister);
module.exports = router;