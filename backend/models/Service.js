const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
   
  });

  const UserService = mongoose.model('Service',serviceSchema);
  module.exports = UserService;