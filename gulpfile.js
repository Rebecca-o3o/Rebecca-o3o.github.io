var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('master.css'))
        .pipe(gulp.dest('css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['sass']);
});
