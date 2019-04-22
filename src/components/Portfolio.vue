<template>
  <div id="portfolio-sec" class="container">
    <Title data-aos="fade-right" title="PORTFOLIO"/>

    <div class="controls">
      <button type="button" class="control btn-info" data-filter="all">All</button>
      <button type="button" class="control" data-filter=".backend">Backend</button>
      <button type="button" class="control" data-filter=".frontend">Frontend</button>
      <button type="button" class="control" data-filter=".leadership">Leadership</button>
    </div>

    <div class="containerMix row">
      <div class="mix backend col-md-4">
        <div
          class="card card-image"
          style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);"
        >
          <div
            class="text-white text-center align-items-center rgba-black-strong py-5 px-4"
            style="height:300px;"
            @mouseover="show = true"
            @mouseleave="show = false"
          >
            <div v-if="show">
              <h5 class="pink-text">
                <i class="fas fa-chart-pie"></i> Backend
              </h5>
              <h3 class="card-title pt-2">
                <strong>QueryFox</strong>
              </h3>
              <a class="btn btn-pink">
                <i class="fas fa-clone left"></i> Details
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="mix frontend col-md-4">
        <div
          class="card card-image"
          style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);"
        >
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="pink-text">
                <i class="fas fa-chart-pie"></i> Frontend
              </h5>
              <h3 class="card-title pt-2">
                <strong>Czabalet</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                Odit sed qui, dolorum!.
              </p>
              <a class="btn btn-pink">
                <i class="fas fa-clone left"></i> Details
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mix backend col-md-4">
        <div
          class="card card-image"
          style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);"
        >
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="pink-text">
                <i class="fas fa-chart-pie"></i> Backend
              </h5>
              <h3 class="card-title pt-2">
                <strong>Anthony's Games</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                Odit sed qui, dolorum!.
              </p>
              <a class="btn btn-pink">
                <i class="fas fa-clone left"></i> Details
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mix frontend col-md-4">
        <div
          class="card card-image"
          style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);"
        >
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="pink-text">
                <i class="fas fa-chart-pie"></i> Frontend
              </h5>
              <h3 class="card-title pt-2">
                <strong>Delisa</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                Odit sed qui, dolorum!.
              </p>
              <a class="btn btn-pink">
                <i class="fas fa-clone left"></i> Details
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mix frontend col-md-4">
        <div
          class="card card-image"
          style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);"
        >
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="pink-text">
                <i class="fas fa-chart-pie"></i> Frontend
              </h5>
              <h3 class="card-title pt-2">
                <strong>Arrow Game</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                Odit sed qui, dolorum!.
              </p>
              <a class="btn btn-pink">
                <i class="fas fa-clone left"></i> Details
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mix backend col-md-4">
        <div
          class="card card-image"
          style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);"
        >
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="pink-text">
                <i class="fas fa-chart-pie"></i> Backend
              </h5>
              <h3 class="card-title pt-2">
                <strong>Books Library</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                Odit sed qui, dolorum!.
              </p>
              <a class="btn btn-pink">
                <i class="fas fa-clone left"></i> Details
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mix leadership col-md-4">
        <div
          class="card card-image"
          style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);"
        >
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="pink-text">
                <i class="fas fa-chart-pie"></i> Leadership
              </h5>
              <h3 class="card-title pt-2">
                <strong>AIESEC</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                Odit sed qui, dolorum!.
              </p>
              <a class="btn btn-pink">
                <i class="fas fa-clone left"></i> Details
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mix leadership col-md-4">
        <div
          class="card card-image"
          style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);"
        >
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="pink-text">
                <i class="fas fa-chart-pie"></i> Leadership
              </h5>
              <h3 class="card-title pt-2">
                <strong>TEDx</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                Odit sed qui, dolorum!.
              </p>
              <a class="btn btn-pink">
                <i class="fas fa-clone left"></i> Details
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mix leadership col-md-4">
        <div
          class="card card-image"
          style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);"
        >
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="pink-text">
                <i class="fas fa-chart-pie"></i> Leadership
              </h5>
              <h3 class="card-title pt-2">
                <strong>Google Development Group</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                Odit sed qui, dolorum!.
              </p>
              <a class="btn btn-pink">
                <i class="fas fa-clone left"></i> Details
              </a>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import Title from "./includes/Title";
import mixitup from "mixitup";

export default {
  name: "portfolio-sec",
  components: {
    Title
  },
  mounted() {
    var containerEl = document.querySelector(".containerMix");
    mixitup(containerEl);
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
</style>
