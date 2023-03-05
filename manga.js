const express = require('express');
const router = express.Router();
const MangaController = require('../controllers/MangaController.js');

// Получение списка манги
router.get('/manga', MangaController.getMangaList);

// Получение манги по ID
router.get('/manga/:id', MangaController.getMangaById);

module.exports = router;
