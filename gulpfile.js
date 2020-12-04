const gulp = require("gulp");
const minify = require("gulp-babel-minify");
const htmlmin = require('gulp-html-minifier-terser');
const ghPages = require('gulp-gh-pages');


gulp.task('miniJs', () => {
return new Promise(function(resolve, reject) {
  gulp.src("./src/*.js")
  .pipe(minify({
    mangle: {
      keepClassName: true
    }
  }))
  .pipe(gulp.dest("./dist"));
  resolve();
})
});

gulp.task('miniHtml', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('deploy', () => src('./dist/**/*').pipe(ghPages()));

gulp.task('default', gulp.parallel(
  'miniJs',
  'miniHtml'
));