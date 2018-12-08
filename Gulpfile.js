"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify-es").default;
let rename = require("gulp-rename");
let cleanCSS = require("gulp-clean-css");

sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return gulp
    .src("src/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      cleanCSS({ debug: true }, details => {
        console.log(
          `${details.name} size before minification: ${
            details.stats.originalSize
          }`
        );
        console.log(
          `${details.name} size after minification: ${
            details.stats.minifiedSize
          }`
        );
      })
    )
    .pipe(gulp.dest("compiled"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./src/*.scss", ["sass"]);
});

gulp.task("minifyJs", function() {
  return gulp
    .src("src/*.js")
    .pipe(rename("bundle.min.js"))
    .pipe(uglify(/* options */))
    .pipe(gulp.dest("compiled/"));
});

gulp.task("minifyJs:watch", function() {
  gulp.watch("src/*.js", ["minifyJs"]);
});

gulp.task("default", ["sass", "minifyJs", "sass:watch", "minifyJs:watch"]);
