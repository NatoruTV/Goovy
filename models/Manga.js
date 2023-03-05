const mongoose = require('mongoose');

const MangaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  chapters: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

const Manga = mongoose.model('Manga', MangaSchema);

module.exports = Manga;
