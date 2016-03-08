
'use strict';

var gulp = require('gulp');
var fontmin = require('gulp-fontmin');
var flatten = require('gulp-flatten');
var nodemon = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var opn = require('opn');
var devip = require('dev-ip');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var streamify = require('gulp-streamify');
var regenerator = require('gulp-regenerator');

process.env.NODE_ENV = 'development';
process.env.PORT = 12306;

gulp.task('default', ['development']);

gulp.task('development', function () {
  return runSequence('copy', 'style', 'bundle', 'serve', 'watch', 'opn');
});

gulp.task('style', function () {
  return gulp.src('./public/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('bundle', function () {
  return browserify('./public/js/app.js')
    .transform('babelify', { presets: 'es2015', compact: false })
    .bundle()
    .pipe(source('main.js'))
    .pipe(ngAnnotate({ add: true }))
    .pipe(streamify(regenerator({ includeRuntime: true })))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./public/js'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen(35728);
  gulp.watch('./public/sass/**/*.scss', ['style']);
  gulp.watch('./public/js/**/*.js', ['bundle']);
});

// gulp.task('font', function () {
//   return gulp.src('src/fonts/*.ttf')
//     .pipe(fontmin({ text: '他夏了夏天' }))
//     .pipe(gulp.dest('dist/fonts'));
//
// });

gulp.task('copy', function () {
  gulp.src('./public/bower_components/**/fonts/*').pipe(flatten()).pipe(gulp.dest('./public/fonts'));
});

gulp.task('serve', function () {
  nodemon({
    script: './bin/www',
    ext: 'js ejs',
    watch: ['views/', 'routes/', 'app.js', 'bin/'],
    ignore: ['public/']
  }).on('restart', function () {
    setTimeout(() => {
      livereload.reload();
    }, 1000);
  });
});

gulp.task('opn', function () {
  return opn('http://' + devip()[0] + ':' + process.env.PORT);
});
