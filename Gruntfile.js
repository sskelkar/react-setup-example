var grunt = require('grunt');

grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-browserify');

grunt.initConfig({
  clean: ['build'],
  copy: {
    html: {
      options: {
        flatten: true
      },
      files: {
        'build/index.html': 'src/index.html'
      }
    }
  },
  browserify: {
    dist: {
      files: {
        'build/bundle.js': ['src/index.js']
      },
      options: {
        transform: [ 'react-templatify', [ 'babelify', { 'presets': [ 'es2015', 'react' ] }  ] ]
      }
    }
  }
});

grunt.registerTask('build', ['clean', 'copy:html', 'browserify']);
