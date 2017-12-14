var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('master.css'))
    .pipe(gulp.dest('./css/'))
})

//Watch task
// gulp.task('default',function() {
//   return gulp.watch('./sass/**/*.scss',['sass'])
// })


gulp.task('default',['sass'])
