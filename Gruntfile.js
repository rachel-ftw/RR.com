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
        files: {'dist/style.css': ['styles.css']}
      }
    },

    uglify: {
      app: {
        files: {
          'dist/public/js/main-min.js': ['public/js/main-min.js'],
          'dist/index.html': ['index.html']
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
