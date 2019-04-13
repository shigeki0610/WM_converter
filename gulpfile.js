const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

const paths = {
  'src': {
    'scss': 'scss/**/*.scss',
  },
  'dist': {
    'css': 'css/',
  }
};

gulp.task('sass', done => {
  gulp.src(paths.src.scss)
  .pipe(sass({
    outputStyle: 'compact',
  }).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
  }))
  .pipe(gulp.dest(paths.dist.css));
  done();
});

gulp.task('dev', () => {
  gulp.watch(paths.src.scss, gulp.task('sass'));
});

