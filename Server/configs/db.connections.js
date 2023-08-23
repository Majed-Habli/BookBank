const mongoose = require("mongoose")

const mongoDb = () => {
  mongoose.connect("mongodb+srv://majedhabli4:EPTTTMqK8vb0EeOx@recipebook.hfhagul.mongodb.net/")
    .then(() => {
      console.log("Connected to MongoDB")
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = mongoDb