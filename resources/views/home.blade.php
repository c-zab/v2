@extends('includes.layout')

@section('content')

@include('sections.cover')

<div id="app" v-cloak>
	<navbar></navbar>
	<about class=" py-3"></about>
	<skills class="py-3"></skills>
	<portfolio class="py-3"></portfolio>
  <contact class="py-3">
    @include('sections.form')
  </contact>
  <my-footer />
</div>

@endsection
