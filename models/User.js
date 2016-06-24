var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role:     { type: String, required: true, default: 'simple'},
  date:     { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', tutorialSchema);
