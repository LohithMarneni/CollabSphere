const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const VolunteerSchema = new Schema({
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
  aadharNumber :
  {
    type: Number,
    required : true
  },
  earnings:
  {
    type: Number,
    default : 0
  },
  photo :
  {
    type: String,
    required : true,
    default : "https://drive.google.com/file/d/11KZZP9wfllBk4vmMLrxLoLGVomPEB350/view?usp=drive_link"
  } 
});
module.exports = mongoose.model("Volunteer", VolunteerSchema);