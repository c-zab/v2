<?php

Route::get('/', 'PagesController@home');

// Route::get('{path}', function () {
//   return view('home');
// })->where('path', '(.*)');

Route::post('/messages', 'MessagesController@store');
