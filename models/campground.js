var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   price: String(),
   image: String,
   description: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   }, 
   location: String, 
   maxCapacity: Number, 
   area: Number
});

module.exports = mongoose.model("Campground", campgroundSchema);