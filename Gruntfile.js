/**
@class Gruntfile
@constructor
*/

var path;
path = require('path');

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
		},

		compass: {
			dev: {
				options: {
					noLineComments: false,
					relativeAssets: true,
					sassDir: './styles',
					cssDir: './styles'
				}
			}
		},

		copy: {
		},

		cssmin: {
		},

		jshint: {
			options: {
				indent: 4,
				jshintrc: './.jshintrc'
			},
			scripts: {
				src: [
					'./scripts/game.js'
				]
			}
		},

		watch: {
			styles: {
				files: './styles/**/*.scss',
				tasks: ['compass:dev']
			},
			scripts: {
				files: './scripts/game.js',
				tasks: ['jshint:scripts']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadTasks('./grunt_tasks/');


	return grunt.registerTask('default', [
		'compass:dev',
		'jshint:scripts'
	]);

};
