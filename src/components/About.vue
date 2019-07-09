<template>
  <div id="about-sec" class="container">
    <Title title="ABOUT" />
    <div class="container pb-5">
      <div class="row text-center">
        <div class="col-md align-self-center">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="top-bottom"
          >
            <img class="me-picture" src="../assets/images/me.jpg" align="center" alt="image" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
            data-aos-anchor-placement="top-bottom"
          >
            <h2>Who I am?</h2>
            <p>
              I am a
              <strong class="text-success">full-stack</strong> developer based in Toronto, Canada.
            </p>
            <p>
              I am pasionate for developing
              <strong class="text-warning">quality software</strong>. It is exiting to learn about new technologies and to work as a team in order to deliver a great product; besides, I am a
              <strong>team work person</strong> and I like to create intuitive and dynamic user experiences.
            </p>
          </div>
        </div>
        <div class="col-md align-self-center">
          <Language
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="bottom-bottom"
            name="Python"
            percentage="70"
          />
          <Language
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="bottom-bottom"
            name="PHP"
            percentage="70"
          />
          <Language
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="bottom-bottom"
            name="C#"
            percentage="60"
          />
          <Language
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="bottom-bottom"
            name="Typescript"
            percentage="65"
          />
          <Language
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="bottom-bottom"
            name="VueJS"
            percentage="70"
          />
          <Language
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="bottom-bottom"
            name="React"
            percentage="55"
          />
          <Language
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="bottom-bottom"
            name="JS"
            percentage="70"
          />
          <Language
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="bottom-bottom"
            name="CSS"
            percentage="80"
          />
          <Language
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="bottom-bottom"
            name="HTML"
            percentage="75"
          />
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
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
          <p>yellow rgba-yellow-strong Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
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
            <h3>Dinamic</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore fuga numquam</p>
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
	}
};
</script>
