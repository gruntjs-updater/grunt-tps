/*
 * grunt-tps
 * https://github.com/yize/grunt-tps
 *
 * Copyright (c) 2013 yize
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    var path = require('path');

    var exec = require('child_process').exec;
    var pythonPath = path.resolve('./tasks/lib/python/bin/python');
    var tpsmatePath = path.resolve("./tasks/lib/tpsmate/src/cli.py");


    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('tps', 'upload your files to tps.', function () {
        var host = this;
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            pythonPath:"python",
            // tpsmatePath: "~/github/tpsmate/src/cli.py",
            argv: "--inplace"
        });

        // var pythonPath = options.pythonPath;
        // delete options.pythonPath;

        // var tpsmatePath = options.tpsmatePath;
        // delete options.tpsmatePath;

        var argv = options.argv;
        delete options.argv;

//        var force = options.force ? '--force' : '';

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            // Concat specified files.
            var fp = f.src.filter(function (filepath) {
                console.log(filepath);
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (filepath) {
                    return filepath;
                }).join(' ');


            var cmd = pythonPath + " " + tpsmatePath + " upload " + fp + ' ' + argv;

            console.log(cmd);

            var done = host.async();

            exec(cmd, function (error, stdout, stderr) {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log('child_process exec error: ' + error);
                }
                done('success');
            });

        });


    });

};
