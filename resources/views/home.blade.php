@extends('includes.layout')

@section('content')

@include('sections.cover')

<div id="app">
	<navbar></navbar>
	<about class=" py-3"></about>
	<skills class="py-3"></skills>
	<portfolio class="py-3"></portfolio>
	<contact class="py-3"></contact>

	@include('sections.form')

</div>

@include('sections.footer')

@endsection
