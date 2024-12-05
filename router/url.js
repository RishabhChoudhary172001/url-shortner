const express = require('express');
const router = express.Router();
const { handleGenerateNewShortURL, viewAnalytics } = require('../controllers/url');

router.post('/', handleGenerateNewShortURL);

router.get('/analytics/:shortId', viewAnalytics);

module.exports = router;