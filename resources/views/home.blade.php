@extends('includes.layout')

@section('content')

@include('sections.cover')

<div id="app" v-cloak>
	<navbar></navbar>
	<about class=" py-3"></about>
	<skills class="py-3"></skills>
	<portfolio class="py-3"></portfolio>
</div>

<div id="form" v-cloak>
  <contact class="py-3"></contact>
	@include('sections.form')
</div>

@include('sections.footer')

@endsection
