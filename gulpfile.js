//plugins
var gulp = require('gulp'), 
    concat = require('gulp-concat'), 
    less = require('gulp-less'), 
    rename = require('gulp-rename'), 
    uglify = require('gulp-uglify'),
    debug = require('gulp-debug');


//tasks
gulp.task('deploy', ['css']); 
gulp.task('default', ['watchLess']); 

//compile and rename less
gulp.task('css',function(done) {
  gulp.src( ['src/less/style.less'] )
    .pipe( less() )
    .pipe(rename({ extname: '.min.css' }))
    .pipe(debug())
    .pipe(gulp.dest( 'dist/css' ))
    .on('end', done);
});

//watch for changes in less files
gulp.task('watchLess', function(ev) {
  gulp.watch( 'src/**/*.less',['css']);
});