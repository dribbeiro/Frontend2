var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');

gulp.task('dist', function() {

	gulp.src('./src/**/*.ts')
		.pipe(ts({ noImplicitAny: true }))
		.pipe(gulp.dest('./dist'));

	gulp.src('./dist/*.js')
		.pipe(concat('./dist'))
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));

});

gulp.task('default', ['dist', 'watch']);

gulp.task('watch', function(){

	gulp.watch('./src/*.ts', function(evt){
		gulp.run('watch', 'dist');
	});

});