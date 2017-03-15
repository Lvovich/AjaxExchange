require('es6-promise').polyfill();

var gulp     = require('gulp'),
    concat   = require('gulp-concat'),
    closureCompiler = require('google-closure-compiler').gulp(),
    clean    = require('gulp-clean'),
    sequence = require('gulp-sequence')
    ;

var paths = {
    src  : 'source/',
    dest : 'release/'
};

var releaseName = 'aex.min.js';

// ================================================== GLOBAL TASKS ================================================== //
gulp.task(
    'default',
    sequence('clean', 'concat', 'min', 'add_copyright')
);

gulp.task(
    'dev',
    sequence('clean', 'concat')
);

// =================================================== base tasks =================================================== //
/**
 * pause
 */
gulp.task('pause', function (cb) {
    setTimeout(function(){cb()}, 10000)
}); // -END- pause

/** --------------------------------------------------------------------------------------------------------------------
 * clean
 */
gulp.task('clean', function () {
    return gulp.src([paths.dest + '*'], {read: false})
        .pipe(clean());
}); // -END- clean

/** --------------------------------------------------------------------------------------------------------------------
 * js
 */
gulp.task('concat', function () {
    return gulp.src([
        paths.src + '_wrapper_begin.js',
        paths.src + 'aex.js',
        paths.src + 'proto_*.js',
        paths.src + '_wrapper_end.js',
    ])
        .pipe(concat(releaseName))
        .pipe(gulp.dest(paths.dest));
}); // -END- js

/** --------------------------------------------------------------------------------------------------------------------
 * min all
 */
gulp.task('min', function () {
    return gulp.src([paths.dest + releaseName])
        .pipe(closureCompiler({
            compilation_level: 'ADVANCED',
            warning_level: 'VERBOSE',
            language_in: 'ECMASCRIPT5_STRICT',
            language_out: 'ECMASCRIPT5_STRICT',
            output_wrapper: '%output%',
            js_output_file: releaseName
        }))
        .pipe(gulp.dest(paths.dest));
}); // -END- min all

/** --------------------------------------------------------------------------------------------------------------------
 * js_add_vendor
 */
gulp.task('add_copyright', function () {
    return gulp.src([paths.src + '_copyright.js', paths.dest + releaseName])
        .pipe(concat(releaseName))
        .pipe(gulp.dest(paths.dest));
}); // -END- js_add_vendor
