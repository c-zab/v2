<template>
  <div class="col-md">
    <h2>{{ title }}</h2>
    <div class="list-group-flush">
      <div class="list-group-item py-2">
        <div class="row">
          <div class="col-3">
            <i class="devicon-image devicon-laravel-plain colored p-2"></i>
          </div>
          <div class="col">
            <h4 class="pt-2">Photos</h4>
          </div>
        </div>
      </div>
      <div class="list-group-item py-2">
        <div class="row">
          <div class="col-3">
            <i class="devicon-image devicon-laravel-plain colored p-2"></i>
          </div>
          <div class="col">
            <h4 class="pt-2">Photos</h4>
          </div>
        </div>
      </div>
      <div class="list-group-item py-2">
        <div class="row">
          <div class="col-3">
            <i class="devicon-image devicon-laravel-plain colored p-2"></i>
          </div>
          <div class="col">
            <h4 class="pt-2">Photos</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped>
.devicon-image {
  font-size: 3rem;
}
</style>
