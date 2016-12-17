var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var php		= require('gulp-connect-php');

// Static Server + watching scss/html files
gulp.task('serve', ['sass','php'], function() {

    browserSync.init({
        proxy: "localhost:8001"
    });


    gulp.watch("style/sass/*.sass", ['sass']);
    gulp.watch("index.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("style/sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("style/css"))
        .pipe(browserSync.stream());
});

gulp.task('php', function() {
    php.server({ base: './', port: 8001, keepalive: true});
});



gulp.task('default', ['serve'] );
