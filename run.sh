#!/bin/sh
echo 'Embed html string'
echo '=============================================='
node dest/embedhtml.bundle.js
echo ''

echo 'Embed html string and uglify by webpack plugin'
echo '=============================================='
node dest/embedhtml.bundle.min.js
echo ''

echo 'Embed html string and uglify by grunt'
echo '=============================================='
node dest/embedhtml.bundle.min-by-grunt.js
echo ''

echo 'Load html'
echo '=============================================='
node dest/loadhtml.bundle.js
echo ''

echo 'Load html and uglify by webpack plugin'
echo '=============================================='
node dest/loadhtml.bundle.min.js
echo ''

echo 'Load html and uglify by grunt'
echo '=============================================='
node dest/loadhtml.bundle.min-by-grunt.js
echo ''
