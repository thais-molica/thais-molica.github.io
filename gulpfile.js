//plugins
var gulp = require('gulp'), 
    concat = require('gulp-concat'), 
    less = require('gulp-less'), 
    rename = require('gulp-rename'), 
    uglify = require('gulp-uglify'),
    debug = require('gulp-debug');


//tasks
gulp.task('deploy', ['css', 'js']); 
gulp.task('default', ['watchLess', 'watchJs']); 


//CSS TASKS

//compile and rename less
gulp.task('css',function(done) {
  gulp.src( ['src/less/style.less'] )
    .pipe( less() )
    .pipe(rename({ extname: '.min.css' }))
    .pipe(debug({title: 'CSS:'}))
    .pipe(gulp.dest( 'dist/css' ))
    .on('end', done);
});

//watch for changes in less files
gulp.task('watchLess', function() {
  gulp.watch( 'src/less/*.less',['css']);
});

//JS TASKS

gulp.task('js',function(done) {
  gulp.src(
      [
      'src/js/components/jquery/dist/jquery.js',
      'src/js/components/mustache/mustache.js',
      'src/js/*.js'
      ]
    )
    .pipe(concat('scripts.min.js'))
    //.pipe(uglify())
    .pipe(debug({title: 'JS:'}))
    .pipe(gulp.dest( 'dist/js' ))
    .on('end', done);
});

//watch for changes in js files
gulp.task('watchJs', function() {
  gulp.watch( 'src/js/*.js',['js']);
});