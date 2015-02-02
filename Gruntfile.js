module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      src: 'src',
      dest: 'dest'
    },
    webpack: {
      build: require('./webpack.config.js'),
      uglify: require('./webpack.config.uglify.js')
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
};
