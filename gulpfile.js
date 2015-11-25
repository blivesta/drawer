'use strict';

var browserSync = require('browser-sync');
var browserReload = browserSync.reload;
var cssnano = require('cssnano');
var cssnext = require('postcss-cssnext');
var cssimport = require('postcss-import')
var cssscss = require('gulp-css-scss');
var del = require('del');
var gulp = require('gulp');
var header = require('gulp-header');
var jshint = require('gulp-jshint');
var pkg = require('./package.json');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');
var stylish = require('jshint-stylish');
var strip = require('gulp-strip-comments');
var uglify = require('gulp-uglify');

var banner = [
'/*!',
' * <%= pkg.name %> v<%= pkg.version %>',
' * <%= pkg.description %>',
' * <%= pkg.homepage %>',
' * License : <%= pkg.license %>',
' * Author : <%= pkg.author %>',
' */',
'',
''].join('\n');

var cleanupLine = '\n\n\n\n\n\n\n';

var dirs = {
  src:'./src',
  dist:'./dist',
  sandbox:'./sandbox',
  scss:'./scss'
};


gulp.task('css', ['cssscss'], function () {
  var processors = [
    cssimport,
    cssnext({
      features: {
        colorRgba: false,
        rem: false
      }
    })
  ];
  return gulp
    .src(dirs.src + '/css/drawer.css')
    .pipe(postcss(processors))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest(dirs.dist + '/css'))
    .pipe(postcss([
      cssnano({ discardComments: { removeAll: true } })
    ]))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(dirs.dist + '/css'));
});


gulp.task('cssscss', ['cssscss:drawer'], function () {
  return gulp
    .src([
      '!' + dirs.src + '/css/drawer.css',
      dirs.src + '/css/*.css'
     ])
    .pipe(cssscss())
    .pipe(strip({ safe: true }))
    .pipe(replace(cleanupLine, ''))
    .pipe(rename({ prefix: '_' }))
    .pipe(gulp.dest(dirs.scss));
});


gulp.task('cssscss:drawer', function () {
  return gulp
    .src([ dirs.src + '/css/drawer.css' ])
    .pipe(cssscss())
    .pipe(strip({ safe: true }))
    .pipe(replace(cleanupLine, ''))
    .pipe(gulp.dest(dirs.scss));
});


gulp.task('js', function(){
  return gulp
    .src(dirs.src + '/js/drawer.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(header(banner, { pkg:pkg }))
    .pipe(gulp.dest(dirs.dist + '/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(header(banner, { pkg:pkg }))
    .pipe(gulp.dest(dirs.dist + '/js'));
});


gulp.task('cleanup', function(cb){
  return del([
    dirs.dist,
    dirs.scss
  ], cb);
});


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: '.',
      directory: true
    }
  });
  gulp.watch([ dirs.src + '/css/**/*.css'], ['css']);
  gulp.watch([ dirs.src + '/js/*.js'], ['js']);
  gulp.watch([
    dirs.dist + '/**/*.min.{css,js}',
    dirs.sandbox + '/*.{css,html}'
  ]).on('change', browserReload);
});


gulp.task('default', ['build'], function(cb) {
  runSequence('serve', cb);
});


gulp.task('build', ['cleanup'], function(cb){
  runSequence('js', 'css', cb);
});
