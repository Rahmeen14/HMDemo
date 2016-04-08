module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd:'node_modules/materialize-css/dist/css',
						src: 'materialize.min.css',
						dest: 'public/stylesheets/'
					}
			  ]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy']);

};