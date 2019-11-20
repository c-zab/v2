<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	@include('includes.head')
</head>

<body>

	@yield('content')

	<script src="{{mix("/js/manifest.js")}}"></script>
	<script src="{{mix("/js/vendor.js")}}"></script>
	<script src="{{mix("/js/app.js")}}"></script>
	<script src="{{mix("/js/svg.js")}}"></script>
</body>

</html>
