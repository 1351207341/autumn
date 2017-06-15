var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Article = mongoose.model('Article');

var ArticleController = require('../controller/article.controller');

router.get('/', ArticleController.index);

module.exports = router;