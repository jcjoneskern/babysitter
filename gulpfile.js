const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('default', ['test']);

gulp.task('test', function() {
  gulp.src('spec/spec.js')
      .pipe(jasmine())
});
