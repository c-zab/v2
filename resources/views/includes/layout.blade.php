<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	@include('includes.head')
</head>

<body>

	@yield('content')

	<script src="{{asset("/js/main.js")}}"></script>
	<script src="{{asset("/js/app.js")}}"></script>
	<script src="{{asset("/js/form.js")}}"></script>
</body>

</html>
