var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('builds/src/js/**/*')
});

gulp.task('html', function() {
  gulp.src('builds/src/*.html')
});

gulp.task('css', function() {
  gulp.src('builds/src/css/*.css')
});

gulp.task('observedDirectory', function() {
  gulp.watch('builds/src/js/**/*', ['js']);
  gulp.watch('builds/src/css/*.css', ['css']);
  gulp.watch(['builds/src/*.html',
    'builds/src/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/src/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['observedDirectory', 'html', 'js', 'css', 'webserver']);
