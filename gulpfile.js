
var gulp = require('gulp');
var clean = require('gulp-clean');
var rt = require('gulp-react-templates');
var babel = require('gulp-babel');

var testbuild_dir = 'testbuild';

gulp.task('clean', function() {
  return gulp.src(testbuild_dir, {read:false}).pipe(clean());
});

gulp.task('buildrt', ['clean'], function() {
  return gulp.src('src/js/**/*.rt')
    .pipe(rt({modules: 'es6'}))
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest(testbuild_dir));
});

gulp.task('buildjs', ['buildrt'], function() {
  return gulp.src('src/js/**/*.js')
    .pipe(babel({presets: ['es2015','react']}))
    .pipe(gulp.dest(testbuild_dir));
});

gulp.task('testbuild', ['buildjs']);