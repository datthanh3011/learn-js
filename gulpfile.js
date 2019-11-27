var gulp = require('gulp');
 
var sass = require('gulp-sass');
 
var browserSync = require('browser-sync');
 
// compile task
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
 
// compile task
gulp.task('sass', function () {
    gulp.src('css/*.scss')
        .pipe(sass())
        .on('error', swallowError)
        .pipe(gulp.dest(function (f) {
            return f.base;
        }))
        .pipe(browserSync.stream());
});
 
// browser sync init
gulp.task('browser-sync', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
 
// watch for changes in html, css, scss
gulp.task('default', ['browser-sync'], function () {
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch('*.html')
        .on('change', browserSync.reload);
})
 
// skip if error occured
function swallowError(error) {
    console.log(error.toString())
    this.emit('end')
}