var gulp = require("gulp");
var ts = require("gulp-typescript");
var rimraf = require("gulp-rimraf");
var tslint = require("gulp-tslint");
var runSequence = require("run-sequence");
var nodemon = require("gulp-nodemon");


// Config of gulp plugins
runSequence.options.showErrorStackTrace = false;

gulp.task("compile", function () {
    let project = ts.createProject("./tsconfig.json", { rootDir: "src" });

    return project.src()
        .pipe(project())
        .pipe(gulp.dest("built"));
});

gulp.task("lint", function () {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({ configuration: "./tslint.json" }))
        .pipe(tslint.report({ summarizeFailureOutput: true }));
});

gulp.task("clean", function () {
    return gulp.src(["built"])
        .pipe(rimraf());
});

gulp.task("start", function(done) {
    const SCRIPT = "./built/app.js"

    let server = nodemon({
        script: SCRIPT,
        delay: 3000,
        exec: "node"
    });

    server.on("restart", function() {
        console.log(`nodemon restarted ${SCRIPT}`);
    });

    server.on("close", function() {
        done();
    });
});

gulp.task("default", function() {
    return runSequence("lint", "clean", "compile", "start");
});
