'use strict';
var apps = require('../../config/apps.json');

exports.init = function(req, res){
  res.render('account/index', {apps: apps});
};
