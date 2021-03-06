
/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: [
        'js/collections/*.js',
        'js/models/*.js',
        'js/routers/*.js',
        'js/templates/*.js',
        'js/vendor/**/*.js',
        'js/views/*.js',
        'js/*.js'
        ],
        dest: 'dist/<%= pkg.title || pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['js/views/*.js', 'js/models/*.js', 'js/*.js']
      }
    },
    jasmine_node: {
      extensions : "js",
      specNameMatcher: "spec", // load only specs containing specNameMatcher
      projectRoot: ".",
      requirejs: false,
      forceExit: true,
      jUnit: {
        report: false,
        savePath : "./build/reports/jasmine/",
        useDotNotation: true,
        consolidate: true
      },
      all: ['/spec']
    },
    jasmine: {
      pivotal: {
        src: 'public/javascripts/*.js',
        options: {
          specs: 'ui/spec/*Spec.js',
          helpers: 'ui/spec/*Helper.js'
        }
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'js/collections/*.js',
          'js/models/*.js',
          'js/routers/*.js',
          'js/views/*.js',
          'js/templates/*.html',
          'js/*.js',
          '*.html'
        ],
        tasks: ['jshint', 'handlebars']
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test']
      },
      pivotal : {
        files: ['src/**/*.js', 'specs/**/*.js'],
        tasks: 'jasmine:pivotal:build'
      }
    },
     handlebars: {
       compile: {
         options: {
          processName: function(filename) {
            return filename.replace(".html","").replace("js/templates/","");
          },
           amd: true
         },
         files: {
           "js/templates/compiled.js": ["js/templates/**/*.html"]
         }
       }
     },
     concurrent: {
       target: {
         tasks: ['connect', 'watch'],
         options: {
           logConcurrentOutput: true
         }
       }
     },
     nodemon: {
      dev: {
        options: {
          file: 'app.js',
          nodeArgs: ['--debug']
        }
      }
     },
     requirejs: {
       compile: {
         options: {
           name: 'main',
           optimize: "uglify2",
           baseUrl: "js",
           mainConfigFile: "js/main.js",
           out: "dist/main.js",
           paths: {
               "jquery": "vendor/jquery/jquery"
           }
         }
       }
     },
     connect: {
       server: {
         options: {
           port: 9001,
           base: '.',
           keepalive: true
         }
       }
     }
  });


  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  
  grunt.registerTask('start', ['connect']);
  grunt.registerTask('dev', ['handlebars','concurrent:target']);
  grunt.registerTask('build', ['requirejs']);
  grunt.registerTask('specs', ['jasmine', 'jshint']);

  // Default task.
  //grunt.registerTask('default', ['jasmine_node', 'jshint', 'handlebars', 'jasmine', 'concat', 'uglify']);

};
