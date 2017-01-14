
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
                    dest: 'static/font-awesome',
                    filter: 'isFile'
                }, {
                    src: 'bower_components/jquery/dist/jquery.min.js',
                    dest: 'static/jquery.min.js'
                }, {
                    expand: true,
                    cwd: 'bower_components/bootstrap/dist',
                    src: ['css/*', 'fonts/*', 'js/*'],
                    dest: 'static/bootstrap',
                    filter: 'isFile'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('default', ['exec', 'copy']);
};
