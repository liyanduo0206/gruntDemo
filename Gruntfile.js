module.exports = function (grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		meta : {
			banner : '/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.homepage %> */\n'
		},
		uglify : {
			options : {
				banner : '<%= meta.banner %>'
			},
			build : {
				src : 'src/test.js',
				dest : 'bulid/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
			}
		},
		jshint : {
			build : ['Gruntfile.js', 'src/*.js'],
			/*t4s:['Gruntfile.js'],
			t3s:['src/*.js'],*/
			options : {
				jshintrc : '.jshintrc'
			}
		},
		csslint : {
			build : ['Gruntfile.js', 'src/*.js'],
			/*t4s:['Gruntfile.js'],
			t3s:['src/*.js'],*/
			options : {
				csslint : '.csslintrc'
			}
		},
		watch : {
			build : {
				files : ['src/*.js', 'src/*.css'],
				tasks : ['jshint', 'uglify'],
				options : {
					spawn : false
				}
			}
		},
		concat : {
			options : {},
			dist : {
				//src文件夹下包括子文件夹下的所有文件
				src : ['src/**/*.js'],
				//合并文件在dist下名为built.js的文件
				dest : 'dist/built.js'
			}
		},
		cssmin : { //css文件压缩
			css : {
				src : 'css/all.css', //将之前的all.css
				dest : 'css/all.min.css' //压缩
			}
		}
	});

	// grunt.loadNpmTasks('grunt-unwrap');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-csslint');

	grunt.loadNpmTasks('grunt-contrib-cssmain');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['jshint', 'uglify', 'cssmain', 'csslint', 'concat']);

};
