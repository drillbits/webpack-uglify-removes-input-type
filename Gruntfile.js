module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      src: 'src',
      dest: 'dest'
    },
    webpack: {
      build: require('./webpack.config.js'),
      uglify: require('./webpack.config.uglify.js'),
      uglify2: require('./webpack.config.uglify2.js')
    },
    uglify: {
      uglify_by_grunt: {
        files: {
          '<%= dirs.dest %>/embedhtml.bundle.min-by-grunt.js': '<%= dirs.dest %>/embedhtml.bundle.js',
          '<%= dirs.dest %>/loadhtml.bundle.min-by-grunt.js': '<%= dirs.dest %>/loadhtml.bundle.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('build', [
    'webpack',
    'uglify'
  ])
};
