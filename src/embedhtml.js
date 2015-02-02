'use strict';
var cheerio = require('cheerio/index.js');
var html = '<form>\n  <input type="text" id="input-type-text">\n  <input type="password" id="input-type-password">\n  <input type="checkbox" id="input-type-checkbox">\n  <input type="radio" id="input-type-radio">\n  <input type="file" id="input-type-file">\n  <input type="hidden" id="input-type-hidden">\n  <input type="submit" id="input-type-submit">\n  <input type="reset" id="input-type-reset">\n  <input type="button" id="input-type-button">\n  <input type="image" id="input-type-image">\n  <input type="foo" id="input-type-foo">\n</form>';

var $ = cheerio.load(html);

$('input').each(function() {
  console.log(
    '#' + $(this).attr('id') +
    ': input type=' +
    $(this).attr('type'));
});
