'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('./assets/style/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/style/css'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./assets/style/scss/*.scss', gulp.series('sass'));
});