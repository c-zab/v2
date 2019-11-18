const mix = require('laravel-mix');
require('laravel-mix-svg-vue');

mix.sass('resources/sass/fonts.scss', 'public/css')
  .sass('resources/sass/app.scss', 'public/css');

mix.js('resources/js/app.js', 'public/js')
  .extract([
    'vue',
    "bootstrap",
    'jquery',
    "popper.js",
    'vee-validate',
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/vue-fontawesome',
    "@fortawesome/free-brands-svg-icons",
    "@fortawesome/free-regular-svg-icons",
    "@fortawesome/free-solid-svg-icons",
    'mixitup',
    "devicon",
    "axios",
    "aos",
  ]);

mix.copy('resources/images/', 'public/images')
  .copy('resources/images/cards/', 'public/images/cards')
  .copy('resources/images/modals/', 'public/images/modals');

mix.svgVue({
  extract: true,
});

mix.browserSync('localhost:8000');
