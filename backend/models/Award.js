const mongoose = require('mongoose');
const awardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
   
  });

  const awardmodel= mongoose.model('Awardservice',awardSchema);
  module.exports = awardmodel;