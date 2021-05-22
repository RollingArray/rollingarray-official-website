/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Gulp task runner
 * @author code@rollingarray.co.in
 *
 * Created at     : 2020-01-10 10:23:40 
 * Last modified  : 2021-05-22 09:31:14
 */


const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify");
const gulpIf = require("gulp-if");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");

/**************** server task (private) ****************/
const syncConfig = {
    server: {
        baseDir: "dist",
        index: "index.html"
    },
    port: 8000,
    open: true
};

// Task : start server
function server() {
    if (browserSync) browserSync.init(syncConfig);
}

//  Task : root html
function gulpHtmlInclude() {
    return gulp.src(["src/index.html"]).pipe(gulp.dest(["dist"]));
}
gulp.task(gulpHtmlInclude);

// Task : include JS library
function gulpLib() {
    return gulp.src(["src/lib/**/*"]).pipe(gulp.dest(["dist/lib"]));
}
gulp.task(gulpLib);

// Task : include custom JS include and uglify
function gulpJs() {
    return gulp
        .src(["src/js/**/*"])
        .pipe(gulpIf("*.js", uglify({ mangle: false })))
        .pipe(gulp.dest(["dist/js"]));
}
gulp.task(gulpJs);

// Task : include saas
function gulpSass() {
    return gulp
        .src(["src/css/*.css"])
        .pipe(sass())
        .pipe(gulp.dest(["src/css"]))
        .pipe(browserSync.stream());
}
gulp.task(gulpSass);

// Task : combine all css to one css and minify
function gulpCss() {
    return gulp
        .src(["src/css/*.css"])
        .pipe(cleanCSS())
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest("dist/css"));
}
gulp.task(gulpCss);

// Task : web fonts
function gulpFonts() {
    return gulp.src(["src/webfonts/**/*"]).pipe(gulp.dest(["dist/webfonts"]));
}
gulp.task(gulpFonts);

// Task : images
function gulpImages() {
    return gulp
        .src(["src/images/**/*.+(png|jpg|gif|svg)"])
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"));
}
gulp.task(gulpImages);

// Run multiple tasks
gulp.task(
    "default",
    gulp.series(
        gulpHtmlInclude,
        gulpLib,
        gulpJs,
        gulpSass,
        gulpCss,
        gulpFonts,
        gulpImages,
        server
    )
);
