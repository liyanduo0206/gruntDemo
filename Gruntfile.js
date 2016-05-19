module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.homepage %> */\n'
        },
		uglify: {
            options: {
                banner: '<%= meta.banner %>'
            },
            build: {
                src: 'src/test.js',
                dest: 'bulid/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
            }
        },
		jshint:{
			build:['Gruntfile.js','src/*.js'],
			/*t4s:['Gruntfile.js'],
			t3s:['src/*.js'],*/
			options:{
				jshintrc:'.jshintrc'
			}
		},
		csslint:{
			build:['Gruntfile.js','src/*.js'],
			/*t4s:['Gruntfile.js'],
			t3s:['src/*.js'],*/
			options:{
				csslint:'..csslintrc'
			}
		},
		watch:{
			build:{
				files:['src/*.js','src/*.css'],
				tasks:['jshint','uglify'],
				options:{spawn:false}
			}
		}
    });

   // grunt.loadNpmTasks('grunt-unwrap');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-csslint');
   grunt.registerTask('default', ['jshint','uglify','watch','csslint']);

};