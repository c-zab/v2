<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	@include('includes.head')
</head>

<body>

	@yield('content')

	<script src="{{asset("/js/manifest.js")}}"></script>
	<script src="{{asset("/js/vendor.js")}}"></script>
	<script src="{{asset("/js/app.js")}}"></script>
	<script src="{{asset("/js/svg.js")}}"></script>
</body>

</html>
