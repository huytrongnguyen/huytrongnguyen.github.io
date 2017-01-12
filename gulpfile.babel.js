/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
*/

/*========== REQUIRED LIBS ==========*/
import gulp from 'gulp'
import sass from 'gulp-sass'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import streamify from 'gulp-streamify'
import uglify from 'gulp-uglify'

/*========== DEPENDENCIES ==========*/
const DEPENDENCIES = [
        'babel-polyfill',
        'jquery',
        'tether',
        'react',
        'react-dom',
        'react-markdown',
        'react-router',
        'immutable'
      ],

/*========== PATH ==========*/
      PATH = {
        SCSS: '_sass/**/*.scss',
        CSS: 'css',
        JS: 'js',
        LIBS: 'libs',
        SCRIPT: '_scripts'
      },

/*========== TASK ==========*/
      TASK = {
        COPY: 'copy',
        STYLE: 'style',
        FRAMEWORK: 'framework',
        SCRIPT: 'script',
        SERVE: 'serve'
      };

gulp.task(TASK.COPY, () => {
  gulp.src('./node_modules/jquery/dist/**/*').pipe(gulp.dest('./libs/jquery'));
  gulp.src('./node_modules/tether/dist/**/*').pipe(gulp.dest('./libs/tether'));
  gulp.src('./node_modules/bootstrap/dist/**/*').pipe(gulp.dest('./libs/bootstrap'));
});

gulp.task(TASK.STYLE, () => {
  return gulp.src(PATH.SCSS)
      .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
      .pipe(gulp.dest(PATH.CSS));
});

gulp.task(TASK.FRAMEWORK, () => {
  process.env.NODE_ENV = 'production';
  const bundler = browserify({ debug: false });
  DEPENDENCIES.forEach(lib => bundler.require(lib));
  return bundler.bundle()
      .pipe(source('framework.min.js'))
      .pipe(streamify(uglify()))
      .pipe(gulp.dest(PATH.LIBS));
});

const buildScript = (name, entry) => {
  if (!entry) {
    entry = PATH.SCRIPT + '/app.jsx';
  }
  const bundler = browserify({
    entries: entry,
    transform: [babelify],
    extensions: ['.jsx', '.js'],
    paths: [ PATH.SCRIPT + '/core/' ],
    debug: true,
    cache: {},
    packageCache: {}
  });
  DEPENDENCIES.forEach(lib => bundler.external(lib));
  return bundler.bundle()
      .on('error', (err) => { console.log(err.message); this.emit('end'); })
      .pipe(source(name + '.js'))
      .pipe(streamify(uglify()))
      .pipe(gulp.dest(PATH.JS));
};

gulp.task(TASK.SCRIPT, () => buildScript('script'));

gulp.task(TASK.SERVE, () => {
  // trigger for new or deleted files
  // 2 things to get this working:
  //  - Avoid ./ in the file/folder patterns
  //  - Ensure ./ in the value for cwd
  const watchOpt = { cwd: './' };

  gulp.watch(PATH.SCSS, watchOpt, [TASK.STYLE]);
  gulp.start(TASK.STYLE);

  gulp.watch([PATH.SCRIPT + '/**/*.js', PATH.SCRIPT + '/**/*.jsx'], watchOpt, [TASK.SCRIPT]);
  gulp.start(TASK.SCRIPT);
});

gulp.task('default', () => {
  // place code for your default task here
  gulp.start(TASK.SERVE)
});
