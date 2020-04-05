const { parallel, src, dest } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ 'uglyComments': true }))
        .pipe(concat('estilo.min.css'))
        .pipe(dest('build/css'))
}

function copiarHTML() {
    return src('src/index.html')
        .pipe(dest('build'))
}

exports.default = parallel(
    transformacaoCSS, copiarHTML
)