const mongoose = require('mongoose');
const conferanceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
   
  });

  const conferancemodel= mongoose.model('Confernceservice',conferanceSchema);
  module.exports = conferancemodel;