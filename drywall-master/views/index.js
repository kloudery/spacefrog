'use strict'
var apps = [{
  "name": "wordpress",
  "icon": "fa-wordpress",
  "modalName": "wordpressModal",
  "modalBody": "$wordpressModalBody",
  "price": "wordpressPrice"
}, {
  "name": "drupal",
  "icon": "fa-drupal",
  "modalName": "drupalModal",
  "modalBody": "$drupalModalBody",
  "price": "drupalPrice"
}, {
  "name": "joomla",
  "icon": "fa-joomla",
  "modalName": "joomlaModal",
  "modalBody": "$joomlaModalBody",
  "price": "joomlaPrice"
}, {
  "name": "wikipedia-w",
  "icon": "fa-wikipedia-w",
  "modalName": "wikipedia-wModal",
  "modalBody": "$wikipedia-wModalBody",
  "price": "wikipediaPrice"
}, {
  "name": "btc",
  "icon": "fa-btc",
  "modalName": "btcModal",
  "modalBody": "$btcModalBody",
  "price": "btcPrice"
}, {
  "name": "twitch",
  "icon": "fa-twitch",
  "modalName": "twitchModal",
  "modalBody": "$twitchModalBody",
  "price": "twitchPrice"
}]

exports.init = function (req, res) {
  res.render('index', {apps: apps})
}
