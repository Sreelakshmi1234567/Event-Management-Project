const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
   
  });

  const productmodel= mongoose.model('productservice',productSchema);
  module.exports = productmodel;