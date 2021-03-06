const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function(){
    return gulp.src("scss/main.scss")
                .pipe(sourcemaps.init())
                .pipe(sass({
                   outputStyle: "compressed"
                }).on("error", sass.logError))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest("css"));
});

gulp.task("default", function(){
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
});