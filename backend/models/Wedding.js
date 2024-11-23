const mongoose = require('mongoose');
const weddingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
   
  });

  const weddingmodel= mongoose.model('weddingservice',weddingSchema);
  module.exports = weddingmodel;