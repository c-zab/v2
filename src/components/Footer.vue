<template>
  <div>
    <footer class="footer">
      <div class="content has-text-centered">
        <div class="columns is-centered is-vcentered is-mobile">
          <a class="column is-narrow" href="#about" style="color:#ffffff;">
            <div class="icon">
              <i class="mdi fab fa-linkedin-in"></i>
            </div>
          </a>
          <a class="column is-narrow" href="#about" style="color:#ffffff;">
            <div class="icon">
              <i class="mdi fab fa-facebook-f"></i>
            </div>
          </a>
          <a class="column is-narrow" href="#about" style="color:#ffffff;">
            <div class="icon">
              <i class="mdi fab fa-instagram"></i>
            </div>
          </a>
          <a class="column is-narrow" href="#about" style="color:#ffffff;">
            <div class="icon">
              <i class="mdi fab fa-github"></i>
            </div>
          </a>
        </div>
        <p>CARLOS ZABALETA ©2019</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.mdi {
  padding-top: 25%;
}
footer .icon {
  overflow: hidden;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
  width: 55px;
  height: 55px;
  position: relative;
  text-align: center;
  margin: 0px;
  background: #c5c5c5;
  font-size: 18pt;
}

footer .icon:hover {
  background: #04c2c9;
  box-shadow: 0 0 0 3px rgba(4, 94, 201, 0.1);
  transform: scale(0.95);
}
footer .icon:hover .mdi {
  color: #fff;
}
footer .icon:hover .mdi {
  -webkit-animation: toBottomFromTop 0.3s forwards;
  -moz-animation: toBottomFromTop 0.3s forwards;
  animation: toBottomFromTop 0.3s forwards;
}
</style>
