const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  word: {
    type: String
  },
  adjective: {
    type: String
  },
  description: {
    type: String
  }
});

const Dictionary = mongoose.model('Dictionary', schema);

module.exports = Dictionary;
