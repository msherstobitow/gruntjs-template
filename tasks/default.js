module.exports = function(grunt) {
  grunt.registerTask('default', [
  	'jshint', 
  	'uglify', 
  	'stylus', 
  	'autoprefixer', 
  	'csscomb', 
  	'copyto:all',
  	'concat', 
  	'cssmin', 
  	'imagemin', 
  	'clean'
	]);
};