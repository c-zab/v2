<template>
  <div id="about" ref="about-sec" class="container">
    <Title title="ABOUT" />
    <div class="container pb-5">
      <div class="row text-center">
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-anchor-placement="top-bottom"
          class="col-md align-self-center"
        >
          <picture>
            <source srcset="/images/me.webp" type="image/webp" />
            <source srcset="/images/me.png" type="image/png" />
            <img
              class="me-picture"
              src="/images/me.webp"
              type="image/webp"
              align="center"
              alt="image"
            />
          </picture>
          <h2>Who am I?</h2>
          <p>
            I am a
            <strong>full-stack</strong> developer based in Toronto, Canada.
          </p>
          <p>
            I am passionate about
            <strong>quality software development</strong>. I am
            <strong>innovative</strong>,
            <strong>flexible</strong> and
            <strong>curious</strong>, always looking to learn about new technologies and best practices.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-anchor-placement="top-bottom"
          class="col-md align-self-center"
        >
          <Language name="Python" percentage="70" />
          <Language name="PHP" percentage="70" />
          <Language name="C#" percentage="60" />
          <Language name="JavaScript" percentage="70" />
          <Language name="Typescript" percentage="65" />
          <Language name="VueJS" percentage="70" />
          <Language name="React" percentage="55" />
          <Language name="CSS" percentage="80" />
          <Language name="HTML" percentage="75" />
          <Language name="Git" percentage="75" />
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
            <i
              class="about-icon fas fa-5x mb-3"
              :class="{'text-warning':hoverBolt, 'fa-bolt':hoverBolt,'fa-tachometer-alt':!hoverBolt}"
            ></i>
            <h3>Fast</h3>
          </div>
          <p>First impressions are vital on the Internet. According to statistics, half of us don’t even wait two seconds for a website content to pop up!</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="350"
          class="col-md-6 col-lg py-3"
        >
          <div @mouseover="hoverMobile = true" @mouseleave="hoverMobile = false">
            <i
              class="about-icon fas fa-5x mb-3"
              :class="{'text-info':hoverMobile, 'fa-laptop':!hoverMobile,'fa-mobile-alt':hoverMobile}"
            ></i>
            <h3>Responsive</h3>
          </div>
          <p>Every website needs to be user-friendly on a smartphone or any device as Google's SEO increases visibility on search engines based on its responsiveness.</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="400"
          class="col-md col-lg py-3"
        >
          <div @mouseover="hoverLight = true" @mouseleave="hoverLight = false">
            <i
              class="about-icon far fa-5x mb-3"
              :class="{'fa-grin-beam': hoverLight, 'fa-lightbulb': !hoverLight, 'text-success': hoverLight}"
            ></i>
            <h3>Intuitive</h3>
          </div>
          <p>Intuitive design is invisible yet important. The easier your website is to use, the more people will use it.</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="450"
          class="col-md col-lg py-3"
        >
          <div @mouseover="hoverRocket = true" @mouseleave="hoverRocket = false">
            <i
              class="about-icon fa-5x mb-3"
              :class="{'fas fa-rocket':hoverRocket,'far fa-paper-plane':!hoverRocket, 'text-danger':hoverRocket}"
            ></i>
            <h3>Dynamic</h3>
          </div>
          <p>A dynamic website allows to make updates and improves its code faster than having an static website.</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="450"
          class="col-md-12 col-lg-12 py-3"
        >
          <div @mouseover="hoverCode = true" @mouseleave="hoverCode = false">
            <i
              class="about-icon fa-5x mb-3"
              :class="{'fas fa-laptop-code':hoverCode, 'far fa-file-code':!hoverCode, 'text-primary': hoverCode }"
            ></i>
            <h3>Code</h3>
          </div>
          <p>I seek to write open source code so people can modify and share.</p>
          <p>
            It is important to
            <strong>write clean code</strong> so it is easy to read,
          </p>
          <p>
            <strong>consistent code</strong> to make it easy for people to understand how it is working,
          </p>
          <p>
            and
            <strong>extensible code</strong> so it is easy to reuse and modify.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./includes/Title";
import Language from "./includes/Language";

export default {
  name: "about-sec",
  components: {
    Title,
    Language
  },
  data() {
    return {
      hoverBolt: false,
      hoverMobile: false,
      hoverLight: false,
      hoverRocket: false,
      hoverCode: false
    };
  },
  mounted() {
    let about_sec = this.$refs["about-sec"].offsetTop;
    Event.$emit("offsetAbout", about_sec);
  }
};
</script>
