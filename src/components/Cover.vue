<template>
  <div id="cover">
    <div class="cover-image">
      <div class="jumbotron centered shadow-none bg-transparent">
        <div class="container">
          <h1 class="text-white display-4">Hello, I'm Carlos Zabaleta.</h1>
          <h1 class="text-success">I'm a full-stack web developer.</h1>
          <div class="button" dest="about">
            View my work
            <i class="fas fa-arrow-right fa-rotate-90"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#cover .jumbotron {
  width: 100%;
}
h1 {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
}

p {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}
.button {
  padding: 10px 20px;
  color: white;
  border: 2px solid #fff;
  box-sizing: inherit;
  display: inline-block;
  font-size: 13pt;
  transition: all 0.5s;
  cursor: pointer;
}

.button:hover {
  background-color: #04c2c9;
  border-color: #04c2c9;
}
</style>
