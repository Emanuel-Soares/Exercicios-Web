const gulp = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

module.exports.default = gulp.series(
    gulp.parallel(
        gulp.series(appHTML, appCSS, appJS, appIMG),
        gulp.series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)