var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

var onError = function (error) { 
  gutil.beep(); 
  console.log(error.toString())
};

gulp.task('sass', function () {
  gulp.src('scss/main.scss')
    .pipe(sass({includePaths: ['scss']}))
    .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
  browserSync.init(["css/*.css", "js/*.js"], {
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch("scss/**/*.scss", ['sass']);
});