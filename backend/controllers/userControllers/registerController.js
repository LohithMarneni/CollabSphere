const User = require("../../model/User.model");
const bcrypt = require("bcrypt");
const handleRegister = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const flatNo = req.body.flatNo;
  if (!email || !password || !name || !phoneNumber || !flatNo) {
    return res
      .status(400)
      .json({ message: "Email and password are required" });
  }
  try {
    const foundUser = await User.findOne({ email }).exec();
    if (foundUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      name,
      phoneNumber,
      flatNo,
    });
    res.status(200).json({ user });
  } catch (err) {   
    console.log(err);
  }
};
module.exports = { handleRegister };