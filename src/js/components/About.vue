<template>
  <div id="about" ref="about-sec" class="container">
    <Title title="ABOUT" />
    <div class="container pb-5">
      <div class="row justify-content-md-center text-center">
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-anchor-placement="top-bottom"
          class="col-md-6 align-self-center"
        >
          <picture>
            <source srcset="@/images/me.webp" type="image/webp" />
            <source srcset="@/images/me.png" type="image/png" />
            <img
              class="me-picture"
              src="@/images/me.webp"
              type="image/webp"
              align="center"
              alt="Carlos Zabaleta profile picture"
            />
          </picture>
          <h2>Who am I?</h2>
          <p>
            I am a
            <strong>full-stack</strong> developer based in Toronto, Canada.
          </p>
          <p class="text-justify">
            I am passionate about
            <strong>quality software development</strong>. I am
            <strong>innovative</strong>, <strong>flexible</strong> and
            <strong>curious</strong>, always looking to learn about new
            technologies and best practices.
          </p>
        </div>
      </div>
    </div>

    <div class="container pt-4">
      <div class="row text-center">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="300"
          class="col-md-6 col-lg py-3"
        >
          <div @mouseover="hoverBolt = true" @mouseleave="hoverBolt = false">
            <div class="about-icon mb-3">
              <font-awesome-icon
                v-if="hoverBolt"
                icon="bolt"
                size="5x"
                class="text-warning"
              />
              <font-awesome-icon v-else icon="tachometer-alt" size="5x" />
            </div>
            <h3>Fast</h3>
          </div>
          <p class="text-justify">
            First impressions are vital on the Internet. According to
            statistics, half of us don’t even wait two seconds for a website
            content to pop up!
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="250"
          class="col-md-6 col-lg py-3"
        >
          <div
            @mouseover="hoverMobile = true"
            @mouseleave="hoverMobile = false"
          >
            <div class="about-icon mb-3">
              <font-awesome-icon
                v-if="hoverMobile"
                icon="mobile-alt"
                size="5x"
                class="text-info"
              />
              <font-awesome-icon v-else icon="laptop" size="5x" />
            </div>
            <h3>Responsive</h3>
          </div>
          <p class="text-justify">
            Every website needs to be user-friendly on a smartphone or any
            device as Google's SEO increases visibility on search engines based
            on its responsiveness.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="300"
          class="col-md col-lg py-3"
        >
          <div @mouseover="hoverLight = true" @mouseleave="hoverLight = false">
            <div class="about-icon mb-3">
              <font-awesome-icon
                v-if="hoverLight"
                :icon="['far', 'laugh-beam']"
                size="5x"
                class="text-success"
              />
              <font-awesome-icon
                v-else
                :icon="['far', 'lightbulb']"
                size="5x"
              />
            </div>
            <h3>Intuitive</h3>
          </div>
          <p class="text-justify">
            Intuitive design is invisible yet important. The easier your website
            is to use, the more people will use it.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="350"
          class="col-md col-lg py-3"
        >
          <div
            @mouseover="hoverRocket = true"
            @mouseleave="hoverRocket = false"
          >
            <div class="about-icon mb-3">
              <font-awesome-icon
                v-if="hoverRocket"
                icon="rocket"
                size="5x"
                class="text-danger"
              />
              <font-awesome-icon
                v-else
                :icon="['far', 'paper-plane']"
                size="5x"
              />
            </div>
            <h3>Dynamic</h3>
          </div>
          <p class="text-justify">
            A dynamic website allows to make updates and improves its code
            faster than having an static website.
          </p>
        </div>
      </div>
      <div class="row justify-content-md-center text-center">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="400"
          class="col-md-6 col-lg-6 py-3"
        >
          <div @mouseover="hoverCode = true" @mouseleave="hoverCode = false">
            <div class="about-icon mb-3">
              <font-awesome-icon
                v-if="hoverCode"
                :icon="['far', 'file-code']"
                size="5x"
                class="text-primary"
              />
              <font-awesome-icon v-else icon="laptop-code" size="5x" />
            </div>
            <h3>Code</h3>
          </div>
          <p class="text-justify">
            I seek to write open source code so people can modify and share. It
            is important to <strong>write clean code</strong> so it is easy to
            read, <strong>consistent code</strong> to make it easy for people to
            understand how it is working, and
            <strong>extensible code</strong> so it is easy to reuse and modify.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./includes/Title";

export default {
  name: "About",
  components: {
    Title,
  },
  data() {
    return {
      hoverBolt: false,
      hoverMobile: false,
      hoverLight: false,
      hoverRocket: false,
      hoverCode: false,
    };
  },
};
</script>
