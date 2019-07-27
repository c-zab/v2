<?php

Route::get('/', 'PagesController@home');

Route::post('/messages', 'MessagesController@store');