module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*!\n' +
            '* Flipd JavaScript Feature Flagging Library\n' +
            '*\n' +
            '* Version <%= pkg.version %>\n' +
            '* http://github.com/eclifford/flipd\n' +
            '*\n' +
           '*/\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      flipd: {
        files: ['src/**/*.js', 'spec/**/*.js'],
        tasks: 'jasmine'
      }
    },
    jasmine: {
      flipd: {
        src: 'src/**/*.js',
        options: {
          specs: 'spec/*Spec.js',
          helpers: 'spec/helpers/*.js'
        }
      }
    },
    bump: {
      options: {
        push: true,
        pushTo: 'origin'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bump');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['jasmine', 'uglify']);
};