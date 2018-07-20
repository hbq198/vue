

const gulp = require('gulp');
let uglify = require('gulp-uglify');//压缩
const babel = require('gulp-babel'); //es6
let rename  = require('gulp-rename'); //后缀名
 
gulp.task('jsmin', () => {
    return gulp.src('src/main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default',['jsmin', 'elseTask']);