const { series, dest } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject= ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(dest('build'))
}

exports.default = series(transformacaoTS)