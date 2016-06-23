var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tutorialSchema = new Schema({
  title:    { type: String, required: true },
  content:  { type: String, required: true},
  comments: [{ content: String, date: { type: Date, default: Date.now} }],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tutorial', tutorialSchema);
