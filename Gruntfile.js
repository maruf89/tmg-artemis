// Generated on 2014-01-17 using generator-angular-fullstack 1.2.4
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  var nodemonIgnoredFiles = [
    '.tmp/**',
    'app/**',
    'node_modules/**',
    'test/**',
    '.bowerrc',
    '.editorconfig',
    '.gitattributes',
    '.gitignore',
    '.jshintrc',
    '*.json',
    'README.md',
    'Gruntfile.js',
    'karma.conf.js',
  ];

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist'
    },
    open: {
      server: {
        url: 'http://localhost:9000'
      }
    },
    watch: {
      coffee: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.{coffee,litcoffee,coffee.md}'],
        tasks: ['newer:coffee:dist']
      },
      coffeeTest: {
        files: ['test/spec/{,*/}*.{coffee,litcoffee,coffee.md}'],
        tasks: ['newer:coffee:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.styl'],
        tasks: ['copy:stylus']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          '<%= yeoman.app %>/views/{,*//*}*.{html,jade}',
          '{.tmp,<%= yeoman.app %>}/styles/{,*//*}*.styl',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*//*}*.coffee',
          '<%= yeoman.app %>/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}',
        ],
      
        options: {
          livereload: true
        }
      },
      // express: {
      //   files: [
      //     'server.js',
      //     'lib/**/*.{js,json}'
      //   ],
      //   tasks: ['newer:jshint:server', 'nodemon:dev'],
      //   options: {
      //     livereload: true,
      //     nospawn: true //Without this option specified express won't be reloaded
      //   }
      // }
    },
    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      server: {
        options: {
          jshintrc: 'lib/.jshintrc'
        },
        src: [ 'lib/{,*/}*.js']
      },
      all: [
      ]
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/views/*',
            '<%= yeoman.dist %>/public/*',
            '!<%= yeoman.dist %>/public/.git*',
          ]
        }]
      },
      heroku: {
        files: [{
          dot: true,
          src: [
            'heroku/*',
            '!heroku/.git*',
            '!heroku/Procfile'
          ]
        }]
      },
      server: '.tmp'
    },

    // Automatically inject Bower components into the app
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/views/index.html',
        ignorePath: '<%= yeoman.app %>/'
      }
    },

    // Compiles CoffeeScript to JavaScript
    coffee: {
      options: {
        sourceMap: true,
        sourceRoot: ''
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/scripts',
          src: '{,*/}*.coffee',
          dest: '.tmp/scripts',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '{,*/}*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/public/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/public/styles/{,*/}*.styl',
            '<%= yeoman.dist %>/public/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/public/styles/fonts/*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: ['<%= yeoman.app %>/views/index.html',
             '<%= yeoman.app %>/views/index.jade'],
      options: {
        dest: '<%= yeoman.dist %>/public'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/views/{,*/}*.html',
             '<%= yeoman.dist %>/views/{,*/}*.jade'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>/public']
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/public/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/public/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          //collapseWhitespace: true,
          //collapseBooleanAttributes: true,
          //removeCommentsFromCDATA: true,
          //removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/views',
          src: ['*.html', 'partials/*.html'],
          dest: '<%= yeoman.dist %>/views'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    nodemon: {
      dev: {
        options: {
          file: 'server.js',
          args: ['--debug', 'development'],
          watchedExtensions: [
            'js',
            'styl'
          ],
          watchedFolders: ['.'],
          delayTime: 1,
          ignoredFiles: nodemonIgnoredFiles
        }
      }
    },

    'node-inspector': {
      custom: {
        'web-port': 8080,
        'web-host': '127.0.0.1',
        'debug-port': 5858,
        'save-live-edit': false
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/views/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>/public',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
            'images/{,*/}*.{webp}',
            'fonts/**/*'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/views',
          dest: '<%= yeoman.dist %>/views',
          src: '**/*.jade'
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/public/images',
          src: ['generated/*']
        }, {
          expand: true,
          dest: '<%= yeoman.dist %>',
          src: [
            'package.json',
            'server.js',
            'lib/**/*'
          ]
        }]
      },
      stylus: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/styles',
          dest: '.tmp/styles/',
          src: '{,*/}*.{styl,css}'
        }, {
          src: '<%= yeoman.app %>/styles/main.styl',
          dest: '.tmp/styles/main.styl'
        }]
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      nodemon: {
        options: {
          logConcurrentOutput: true
        },
        tasks: [
          'nodemon:dev',
          'node-inspector',
          'watch'
        ]
      },
      server: [
        'copy:stylus',
        'coffee:dist'
      ],
      test: [
        'coffee',
        'copy:stylus'
      ],
      dist: [
        'coffee',
        'copy:stylus',
        'imagemin',
        'svgmin',
        'htmlmin'
      ],
      watch: [
        'watch',
        'node-inspector'
      ]
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= yeoman.app %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('express-keepalive', 'Keep grunt running', function() {
    this.async();
  });

  grunt.registerTask('express', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'express:prod', 'open', 'express-keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'bower-install',
      'concurrent:server',
      'concurrent:nodemon',
      //'open',
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'bower-install',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'ngmin',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('heroku', function () {
    grunt.log.warn('The `heroku` task has been deprecated. Use `grunt build` to build for deployment.');
    grunt.task.run(['build']);
  });

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
