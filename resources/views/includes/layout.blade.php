<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	@include('includes.head')
</head>

<body>

	@yield('content')

	<script src="/js/app.js"></script>
</body>

</html>
