const User = require("../../model/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  try{
    const foundUser = await User.findOne({ email }).exec();
    if (!foundUser) {
      return res.status(400).json({ message: "User not found" });
    }
    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    else{
      const accessToken = jwt.sign(
        {
          email: foundUser.email,
          id: foundUser._id,
          role:"user"
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1d" }
      );
      res.status(200).json({ accessToken });
    }  
  }
  catch(err){
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { handleLogin };
