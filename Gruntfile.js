module.exports = function(grunt) {
  grunt.initConfig({

    htmlmin: {
      app: {
        options: {removeComments: true, collapseWhitespace: true},
        files: {'dist/index.html': 'index.html'}   // 'destination': 'source'
      }
    },

    cssmin: {
      app: {
        files: {'dist/public/styles.css': ['public/styles.css']}
      }
    },

    uglify: {
      app: {
        files: {
          'dist/public/js/main.js': ['public/js/main.js'],
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('build', ['htmlmin', 'cssmin', 'uglify']);
  grunt.registerTask('default', ['build']);
};
