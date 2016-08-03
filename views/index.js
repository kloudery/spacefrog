'use strict';
var apps = require('../config/apps.json');

exports.init = function (req, res) {
  res.render('index', {apps: apps});
};
