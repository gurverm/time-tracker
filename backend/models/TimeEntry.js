const mongoose = require('mongoose');

const timeEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  project: String,
  taskDescription: String,
  hours: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TimeEntry', timeEntrySchema);
