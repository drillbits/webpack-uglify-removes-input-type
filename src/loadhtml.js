'use strict';
var cheerio = require('cheerio/index.js');
var html = require('form.html');

var $ = cheerio.load(html);

$('input').each(function() {
  console.log(
    '#' + $(this).attr('id') +
    ': input type=' +
    $(this).attr('type'));
});
