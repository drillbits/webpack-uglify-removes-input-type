webpack-uglify-removes-input-type
=================================

This is a test repository for [webpack/webpack#752](https://github.com/webpack/webpack/issues/752).

[webpack.optimize.UglifyJsPlugin](http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin) seems to remove a text type attribute of the input tag from html string that loaded by [html-loader](https://www.npmjs.com/package/html-loader).

## Build

```sh
$ npm install -g bower grunt-cli
$ npm install
$ grunt build
:
Running "webpack:build" (webpack) task
:
Running "webpack:uglify" (webpack) task
:
Running "uglify:uglify_by_grunt" (uglify) task
:
$ ls dest
embedhtml.bundle.js              embedhtml.bundle.min.js loadhtml.bundle.min-by-grunt.js
embedhtml.bundle.min-by-grunt.js loadhtml.bundle.js      loadhtml.bundle.min.js
```

## Run

```sh
$ ./run.sh
Embed html string
==============================================
#input-type-text: input type=text
#input-type-password: input type=password
#input-type-checkbox: input type=checkbox
#input-type-radio: input type=radio
#input-type-file: input type=file
#input-type-hidden: input type=hidden
#input-type-submit: input type=submit
#input-type-reset: input type=reset
#input-type-button: input type=button
#input-type-image: input type=image
#input-type-foo: input type=foo

Embed html string and uglify by webpack plugin
==============================================
#input-type-text: input type=text
#input-type-password: input type=password
#input-type-checkbox: input type=checkbox
#input-type-radio: input type=radio
#input-type-file: input type=file
#input-type-hidden: input type=hidden
#input-type-submit: input type=submit
#input-type-reset: input type=reset
#input-type-button: input type=button
#input-type-image: input type=image
#input-type-foo: input type=foo

Embed html string and uglify by grunt
==============================================
#input-type-text: input type=text
#input-type-password: input type=password
#input-type-checkbox: input type=checkbox
#input-type-radio: input type=radio
#input-type-file: input type=file
#input-type-hidden: input type=hidden
#input-type-submit: input type=submit
#input-type-reset: input type=reset
#input-type-button: input type=button
#input-type-image: input type=image
#input-type-foo: input type=foo

Load html
==============================================
#input-type-text: input type=text
#input-type-password: input type=password
#input-type-checkbox: input type=checkbox
#input-type-radio: input type=radio
#input-type-file: input type=file
#input-type-hidden: input type=hidden
#input-type-submit: input type=submit
#input-type-reset: input type=reset
#input-type-button: input type=button
#input-type-image: input type=image
#input-type-foo: input type=foo

Load html and uglify by webpack plugin
==============================================
#input-type-text: input type=undefined
#input-type-password: input type=password
#input-type-checkbox: input type=checkbox
#input-type-radio: input type=radio
#input-type-file: input type=file
#input-type-hidden: input type=hidden
#input-type-submit: input type=submit
#input-type-reset: input type=reset
#input-type-button: input type=button
#input-type-image: input type=image
#input-type-foo: input type=foo

Load html and uglify by grunt
==============================================
#input-type-text: input type=text
#input-type-password: input type=password
#input-type-checkbox: input type=checkbox
#input-type-radio: input type=radio
#input-type-file: input type=file
#input-type-hidden: input type=hidden
#input-type-submit: input type=submit
#input-type-reset: input type=reset
#input-type-button: input type=button
#input-type-image: input type=image
#input-type-foo: input type=foo
```

Only `loadhtml.bundle.min.js` removes the type attribute...

The default value of the type attribute is `text`.

But the CSS selector such as `input[type="text"]` does not applied if the type attribute is removed.
