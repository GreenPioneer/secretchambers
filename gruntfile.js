'use strict';
var path = require('path');

module.exports = function(grunt) {
	// Do grunt-related things in here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat:{
			dist:{
				src:[
				'js/jquery.min.js',
				'js/bootstrap.min.js',				
				'js/custom.js'
				],
				dest:'js/secretchambers.js'
			}
		},
		cssmin:{
			options:{
				banner:'/* secretchamber minified css */',
				noAdvanced:true
			},
			core:{
				files:{
					'css/secretchambers.min.css':['css/fontawesome.css','css/bootstrap.min.css' ,'css/animate.css','css/main.css' ],
					'dist/secretchambers.min.css':['css/fontawesome.css','css/bootstrap.min.css' ,'css/animate.css','css/main.css' ]

				}
			}
		},
		uglify:{
			build:{
				src:'js/secretchambers.js',
				dest:'js/secretchambers.min.js'
			}
		},
		htmlmin: {                                     // Task
		    dist: {                                      // Target
		      options: {                                 // Target options
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: {                                   // Dictionary of files
		        'dist/index.html': 'index.html'
		      }
		    }
		},
		copy: {
		  main: {
		    src: 'js/secretchambers.min.js',
		    dest: 'dist/secretchambers.min.js',
		  },
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.task.registerTask('default', ['concat','cssmin','uglify','htmlmin','copy']);

};