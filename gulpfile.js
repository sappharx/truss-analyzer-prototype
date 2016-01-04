'use strict';

let config = require('./gulp.config')();
let gulp = require('gulp');
let args = require('yargs').argv;
let util = require('gulp-util');
let print = require('gulp-print');
let taskListing = require('gulp-task-listing');
let bump = require('gulp-bump');

gulp.task('help', taskListing);

gulp.task('default', ['help']);

/**
 * Bump the version
 * --type=pre will bump the prerelease version *.*.*-x
 * --type=patch or no flag will bump the patch version *.*.x
 * --type=minor will bump the minor version *.x.*
 * --type=major will bump the major version x.*.*
 * --version=1.2.3 will bump to a specific version and ignore other flags
 */
gulp.task('bump', function () {
    let msg = 'Bumping versions';
    let type = args.type;
    let version = args.version;
    let options = {};
    if (version) {
        options.version = version;
        msg += ` to ${version}`;
    } else {
        options.type = type;
        msg += ` for a ${type}`;
    }

    log(msg);

    return gulp
        .src(config.packages)
        .pipe(print())
        .pipe(bump(options))
        .pipe(gulp.dest(config.root));
});

// utility methods
function clean (path, done) {
    log('Cleaning: ' + util.colors.blue(path));
    del(path, done);
}

function log (msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                util.log(util.colors.blue(msg[item]));
            }
        }
    } else {
        util.log(util.colors.blue(msg));
    }
}
