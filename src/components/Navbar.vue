<template>
  <div id="navbar">
    <nav id="nav" class="navbar navbar-expand-md sticky-top navbar-dark info-color">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Testimonials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};

window.onload = function() {
  window.onscroll = function() {
    myFunction();
  };
  let navbar = document.getElementById("nav");
  let sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
};
</script>

<style scoped>
#nav {
  overflow: hidden;
  background-color: #333;
}

#nav a {
  float: left;
  font-weight: 400;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 5px 12px;
  text-decoration: none;
  font-size: 19px;
}

#nav a:hover {
  background-color: #ddd;
  color: black;
}
/*
#nav a.active {
  background-color: #4caf50;
  color: white;
} */

.content {
  padding: 16px;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #333;
}

.sticky + .content {
  padding-top: 60px;
}
</style>
