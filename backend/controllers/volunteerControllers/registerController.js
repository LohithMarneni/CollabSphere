const Volunteer = require("../../model/Volunteer.model");
const bcrypt = require("bcrypt");
const handleRegister = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const aadharNumber = req.body.aadharNumber;
  if (!email || !password || !name || !phoneNumber || !aadharNumber) {
    return res
      .status(400)
      .json({ message: "Email and password are required" });
  }
  try {
    const foundUser = await Volunteer.findOne({ email }).exec();
    if (foundUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const volunteer = await Volunteer.create({
      email,
      password: hashedPassword,
      name,
      phoneNumber,
      aadharNumber,
    });
    res.status(200).json({ volunteer });
  } catch (err) {   
    console.log(err);
  }
};
module.exports = { handleRegister };