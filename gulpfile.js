const { src, dest, watch, parallel, series } = require('gulp');
const mode = require('gulp-mode')();

const pug = require('gulp-pug');
const pugbem = require('gulp-pugbem');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");

const { rollup } = require('rollup');
const { terser } = require('rollup-plugin-terser');

const browserSync = require('browser-sync').create();

sass.compiler = require('sass');

pugbem.b = true;
pugbem.m = '_';

const buildPath = mode.production() ? './' : './build';

console.log('path: ', buildPath);
console.log('production: ', mode.production());
console.log('development: ', mode.development());

function html() {
  return src('src/pages/*.pug')
    .pipe(pug({
      plugins: [pugbem]
    }))
    .pipe(dest(buildPath))
    .pipe(browserSync.reload({stream: true}));
}

function watchTask() {
  browserSync.init({
    server: {
      baseDir: buildPath 
    }
  });

  watch(['src/components/**/*.scss', 'src/styles/*.scss'], css);
  watch(['src/components/**/*.pug', 'src/pages/*.pug'], html);
  watch(['src/components/*+/*.js', 'src/scripts/*.js'], series(js, reload));
}

function css() {
  return src('src/styles/main.scss')
  .pipe(mode.development(sourcemaps.init()))
    .pipe(sass({outputStyle: 'expanded'})
      .on('error', sass.logError))
    .pipe(mode.production(postcss([autoprefixer()])))
    .pipe(mode.production(postcss([cssnano()])))
  .pipe(mode.development(sourcemaps.write()))
  .pipe(dest(buildPath))
  .pipe(browserSync.reload({stream: true}));
}

async function js() {
  const outputConfig = {
    file: buildPath + '/script.js',
    format: 'iife',
    sourcemap: mode.development(),
    plugins: [terser()]
  };

  const bundle = await rollup({ input: './src/scripts/main.js' });
  return bundle.write(outputConfig);
}

function reload(cb) {
  browserSync.reload();
  cb();
}

exports.default = series(parallel(html, js, css), watchTask);