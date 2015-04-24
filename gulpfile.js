var browsersync = require('browser-sync');
var reload      = browsersync.reload;
var gulp        = require('gulp');
var runSequence = require('run-sequence');
var pkg         = require('./package.json');
var autoprefixerBrowsers = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 20',
  'Firefox >= 24', // Firefox 24 is the latest ESR
  'Explorer >= 8',
  'iOS >= 6',
  'Opera >= 12',
  'Safari >= 6'
]
var headerBanner = [
'/*!',
' * <%= pkg.name %> - <%= pkg.description %>',
' * @version v<%= pkg.version %>',
' * @link    <%= pkg.homepage %>',
' * @author  <%= pkg.author %>',
' * @license <%= pkg.license %>',
' */',
''].join('\n');

module.exports = {
  'browsersync': {
    server: './_gh_pages'
  },
  'uninstall': {
    files: [
      'dist',
      './docs/drawer',
      './_gh_pages'
    ]
  },
  'rubysass': {
    src: './src/scss/drawer.scss',
    dest: './docs/drawer',
    rubySassOptions: {
      sourcemap: true,
      noCache: true
    },
    autoprefixer: autoprefixerBrowsers,
    fallback:false,
    filter:'**/*.css',
    headerBanner : true,
    banner:headerBanner,
    pkg: pkg,
    notify :"Compiled Sass"
  },
  'cssmin': {
    src: './dist/css/drawer.css',
    dest: './dist/css'
  },
  'jshint': {
    setting: './src/js/.jshintrc',
    src:  './dist/js/*.js'
  },
  'jsmin': {
    src:  './dist/js/jquery.drawer.js',
    dest: './dist/js'
  },
  'banner': {
    src:  './src/js/jquery.drawer.js',
    dest:  './docs/drawer',
    pkg: pkg,
    banner:headerBanner
  },
  'ghpage' : {
    src : './_gh_pages/**/*',
    remoteUrl : 'https://github.com/blivesta/drawer.git',
    branch : 'gh-pages'
  },
  'bump': {
    version: pkg.version,
    src:  './bower.json',
    dest: '.'
  }
};

gulp.task('bower', require('gulptasks/lib/bower'));
gulp.task('rubysass', require('gulptasks/lib/rubysass'));
gulp.task('jshint', require('gulptasks/lib/jshint'));
gulp.task('cssmin', require('gulptasks/lib/cssmin'));
gulp.task('jsmin', require('gulptasks/lib/jsmin'));
gulp.task('banner', require('gulptasks/lib/banner'));
gulp.task('deploy', require('gulptasks/lib/ghpage'));
gulp.task('bump', require('gulptasks/lib/bump'));
gulp.task('jekyll', require('gulptasks/lib/jekyll'));
gulp.task('browsersync', require('gulptasks/lib/browsersync'));
gulp.task('uninstall', require('gulptasks/lib/uninstall'));

gulp.task('default',['browsersync'],function() {
  gulp.watch(['./src/scss/*.scss'], ['rubysass']);
  gulp.watch(['./src/js/*.js'], ['banner']);
  gulp.watch(['./docs/**/*.{html,css,js,md}'], ['jekyll',reload]);
  gulp.watch(['./_public'], reload);
});

gulp.task('distCss',function() {
  return gulp.src('./docs/drawer/*.css')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('distJs',function() {
  return gulp.src('./docs/drawer/*.js')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', function() {
  runSequence(
    'bower', 'uninstall','bump',
    ['rubysass','banner'],
    'distCss','distJs',
    ['cssmin','jsmin','jekyll'],
    'jshint',
    ['default']
  );
});
