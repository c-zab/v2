const mix = require('laravel-mix');
require('laravel-mix-svg-vue');

mix.extract(['vue', 'jquery']);

mix.sass('resources/sass/fonts.scss', 'public/css');

mix.js('resources/js/main.js', 'public/js')
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css');

mix.copy('resources/images/', 'public/images')
  .copy('resources/images/cards/', 'public/images/cards')
  .copy('resources/images/modals/', 'public/images/modals');

mix.svgVue({
  extract: true,
});

mix.browserSync('localhost:8000');
