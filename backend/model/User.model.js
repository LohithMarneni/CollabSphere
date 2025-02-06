const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  name : {
    type : String,
    required : true
  },
  phoneNumber : {
    type : Number,
    required : true
  },
  flatNo :
  {
    type: Number,
    required : true
  },
  photo : 
  {
    type : String,
    required : true,
    default : "https://drive.google.com/file/d/1Hf74rTudH31lC_GkpwxYtc_ZhlGmdeg_/view?usp=drive_link"
  }
});
module.exports = mongoose.model("User", userSchema);