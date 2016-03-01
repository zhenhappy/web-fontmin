'use strict';

var gulp = require('gulp');
var fontmin = require('gulp-fontmin');


gulp.task('default', ['copy', 'font']);

gulp.task('copy', function() {
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css'));

});


gulp.task('font', function() {
  return gulp.src('src/fonts/*.ttf')
    .pipe(fontmin({text: '他夏了夏天'}))
    .pipe(gulp.dest('dist/fonts'));

});
