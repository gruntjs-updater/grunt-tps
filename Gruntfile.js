/*
 * grunt-tps
 * https://github.com/yize/grunt-tps
 *
 * Copyright (c) 2013 yize
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        // Configuration to be run (and then tested).
        tps: {
            options: {
                pythonPath:"python",
                tpsmatePath: "~/github/tpsmate/src/cli.py",
                argv: "--inplace"
            },
            all: ['test/style.css']
        }

    });

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['tps']);

};
