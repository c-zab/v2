@extends('includes.layout')

@section('content')

<div id="app" v-cloak>
  <cover>
    @include('sections.cover')
  </cover>
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
