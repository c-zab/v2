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
    <div class="container">
      <p>
        <i class="fas fa-pencil-ruler"></i>Ut et explicabo odio magnam harum error voluptas qui alias. Quaerat expedita ea natus cupiditate impedit aliquid rerum officiis eum. Impedit nemo enim placeat. Voluptatum quasi et voluptas exercitationem sed aut earum molestias. Sunt sint nihil quaerat labore voluptas. Commodi iste aut impedit rerum.
        Sit magni officiis sunt optio quibusdam accusamus dicta voluptatum. Dolores et et molestiae doloremque dolorem odit dolorum id sed. Ipsum enim molestiae vel nemo consequatur a deleniti dolorum. Est incidunt ea qui voluptatem adipisci velit esse ducimus harum.
        Omnis eum vero id fugit totam ea hic alias est. Asperiores ipsum adipisci est rerum. Quae dignissimos dolores sed. Et accusamus eos earum architecto.
        Autem consequatur ex iusto sint voluptas tenetur voluptate velit. Eos et nostrum soluta odit. Optio asperiores veniam ipsa vel ex neque dolorum quia. Quo debitis non et qui.
      </p>
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
