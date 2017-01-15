
module.exports = function (grunt) {
    grunt.initConfig({
        exec: {
            jadeCompile: {
                cmd: 'node make.js',
            }
        },
        copy: {
            libs: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/font-awesome',
                    src: ['css/*', 'fonts/*'],
                    dest: 'static/libs/font-awesome',
                    filter: 'isFile'
                }, {
                    src: 'bower_components/jquery/dist/jquery.min.js',
                    dest: 'static/libs/jquery.min.js'
                }, {
                    expand: true,
                    cwd: 'bower_components/bootstrap/dist',
                    src: ['css/*', 'js/*'],
                    dest: 'static/libs/bootstrap',
                    filter: 'isFile'
                }, {
                    expand: true,
                    cwd: 'bower_components/tether/dist',
                    src: ['css/*', 'js/*'],
                    dest: 'static/libs/tether',
                    filter: 'isFile'
                }]
            },
            src: {
                files: [{
                    expand: true,
                    cwd: 'src/image',
                    src: ['*'],
                    dest: 'static/image',
                    filter: 'isFile'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('default', ['exec', 'copy']);
};
