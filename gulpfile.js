const	auto		= require('autoprefixer-stylus'),
			cssnano	= require('cssnano'),
			gulp		= require('gulp'),
			postcss	= require('gulp-postcss'),
			rupture	= require('rupture'),
			stylus	= require('gulp-stylus'),
			typo		= require('typographic');


gulp.task('theme', () => {

	const processors = [
		cssnano
	];

	return gulp.src('./assets/stylus/theme.styl')
		.pipe(stylus({
			use: [
				auto(),
				typo(),
				rupture()
			]
		}))
		// .pipe(postcss(processors))
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', () => {
	gulp.watch('**/*.styl', gulp.series('theme'));
});
