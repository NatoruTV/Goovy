const express = require('express');
const router = express.Router();
const Manga = require('../models/Manga');

// Add manga
router.post('/', (req, res) => {
  const newManga = new Manga({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    image: req.body.image,
    chapters: req.body.chapters,
    rating: req.body.rating,
  });

  newManga.save()
    .then(manga => res.json(manga))
    .catch(err => res.status(400).json({ message: err.message }));
});

module.exports = router;
