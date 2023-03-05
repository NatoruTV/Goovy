const Manga = require('../models/Manga');
const express = require('express');
const router = express.Router();
// Получение списка манги
exports.getMangaList = (req, res) => {
  Manga.find({}, (err, manga) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        error: 'Internal error, please try again',
      });
    } else {
      res.json(manga);
    }
  });
};

// Получение манги по ID
exports.getMangaById = (req, res) => {
  Manga.findById(req.params.id, (err, manga) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        error: 'Internal error, please try again',
      });
    } else {
      res.json(manga);
    }
  });
};

router.post('/', async (req, res) => {
  try {
    const { title, author, genre, description } = req.body;
    const manga = new Manga({ title, author, genre, description });
    await manga.save();
    res.json(manga);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;