webpack-uglify-removes-input-type
=================================

[webpack.optimize.UglifyJsPlugin](http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin) seems to remove a text type attribute of the input tag from html string that loaded by [html-loader](https://www.npmjs.com/package/html-loader).

## Build

```sh
$ npm install -g bower grunt-cli
$ npm install
$ grunt webpack
:
Running "webpack:build" (webpack) task
:
Running "webpack:uglify" (webpack) task
:
$ ls dest
embedhtml.bundle.js	embedhtml.bundle.min.js	loadhtml.bundle.js	loadhtml.bundle.min.js
```

## Run

They return the same result.

- embedhtml.bundle.js
- embedhtml.bundle.min.js
- loadhtml.bundle.js

```sh
$ node dest/embedhtml.bundle.js
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

But `loadhtml.bundle.min.js` returns the following result.

```sh
$ node dest/loadhtml.bundle.min.js
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
```

The default value of the type attribute is `text`.

But the CSS selector such as `input[type="text"]` does not applied if the type attribute is removed.
