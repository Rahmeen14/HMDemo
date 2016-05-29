module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'node_modules/materialize-css/dist/css',
					src: 'materialize.min.css',
					dest: 'public/stylesheets/'
				}]
			}
		},
		shell: {
			server: {
				command: 'echo "\nStarting server at http://localhost:3000 ..." && npm start',
				options: {
					async: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-shell-spawn');

	grunt.registerTask('default', ['copy', 'shell:server']);

};