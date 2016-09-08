(function(gulp, env) {

    "use strict";

    var sass        = require('gulp-sass'),
        rimraf      = require('gulp-rimraf'),
        rename      = require('gulp-rename'),
        concat      = require('gulp-concat'),
        uglify      = require('gulp-uglify'),
        processhtml = require('gulp-processhtml'),
        jshint      = require('gulp-jshint'),
        ng          = require('gulp-ng-config'),
        cssmin      = require('gulp-cssmin');

    var jsFiles = [
        'public/js/app/app.js',
        'public/js/app/*.js',
        'public/js/app/directives/*.js',
        'public/js/app/contrRollers/*.js',
        'public/js/app/controllers/**/*.js',
        'public/js/app/controllers/**/**/*.js',
        'public/js/app/services/*.js',
        '!public/js/roverDashBoard.min.js'
    ];

    gulp.task('sass', function() {

        return gulp.src('./public/sass/*.scss')
                   .pipe(sass().on('error', sass.logError))
                   .pipe(gulp.dest('./public/css'));

    });

    gulp.task('config', function() {

        return gulp.src('env.json')
                   .pipe(ng('portalApp.config', { environment: env.H2_ENVIRONMENT || 'local' }))
                   .pipe(rename('Config.js'))
                   .pipe(gulp.dest('public/js/app'));

    });

    gulp.task('processhtml', function() {

        return gulp.src('public/index.html')
                   .pipe(processhtml())
                   //.pipe(rename('index.html'))
                   .pipe(gulp.dest('public'));

    });

    gulp.task('cssmin', ['sass'], function() {

        var dependencies = [
            'public/vendor/bootstrap/dist/css/bootstrap.css'
        ];

        return gulp.src(['public/css/*.css', '!public/css/roverDashBoard.min.css'].concat(dependencies))
                   .pipe(cssmin())
                   .pipe(concat('all.js'))
                   .pipe(rename('roverDashBoard.min.css'))
                   .pipe(gulp.dest('public/css'));

    });

    gulp.task('jsmin', ['config'], function() {

        var dependencies = [
            'public/vendor/angular/angular.js',
            'public/vendor/angular-route/angular-route.js'
        ];

        return gulp.src(dependencies.concat(jsFiles))
                   .pipe(uglify())
                   .pipe(concat('all.js'))
                   .pipe(rename('roverDashBoard.min.js'))
                   .pipe(gulp.dest('public/js'));

    });

    gulp.task('clean', ['sass'], function() {

        var cssFiles = ['public/css/*.css', '!public/css/roverDashBoard.min.css'],
            jsFiles  = ['public/js/app'];

        return gulp.src([].concat(cssFiles, jsFiles), { read: false })
                   .pipe(rimraf({ force: true }));

    });

    gulp.task('lint', function() {

        return gulp.src(jsFiles)
                   .pipe(jshint())
                   .pipe(jshint.reporter(require('jshint-stylish')));

    });

    gulp.task('test', ['lint']);
    gulp.task('build', ['sass', 'config', 'jsmin', 'cssmin', 'processhtml']);
    gulp.task('default', ['test', 'build']);
    gulp.task('watch', function() {
        gulp.watch(['./public/sass/*.scss', './public/sass/**/*.scss'], ['sass']);
    });

})(require('gulp'), process.env);