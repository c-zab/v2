const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css');

mix.copy('resources/images/', 'public/images')
	.copy('resources/images/cards/', 'public/images/cards')
	.copy('resources/images/modals/', 'public/images/modals');
