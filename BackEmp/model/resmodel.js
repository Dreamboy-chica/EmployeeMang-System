let mongoose = require("mongoose");

let ressch=new mongoose.Schema({
    "_id":Number,
    "name":String,
    "phno":String,
    "dept":String,
    "gen":String,
    "sal":Number
})

// let ressch = new mongoose.Schema({
//   _id: {
//     type: Number,
//     required: true, // Make this field mandatory
//   },
//   name: {
//     type: String,
//     required: true, // Make this field mandatory
//   },
//   phno: {
//     type: String,
//     required: true, // Make this field mandatory
//   },
//   dept: {
//     type: String,
//     required: true, // Make this field mandatory
//   },
//   gen: {
//     type: String,
//     required: true, // Make this field mandatory
//   },
//   sal: {
//     type: Number,
//     required: true, // Make this field mandatory
//   },
// });


let Emp = mongoose.model("result", ressch);
module.exports = Emp;
